import { NextResponse } from 'next/server';
import crypto from 'crypto';

// In-memory rate limiting (use Redis in production)
const downloadAttempts = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_DOWNLOADS_PER_WINDOW = 3; // 3 downloads per minute per IP

// Download tracking for monitoring
const downloadLog = [];

function cleanupOldAttempts() {
  const now = Date.now();
  for (const [ip, attempts] of downloadAttempts.entries()) {
    const recentAttempts = attempts.filter(
      timestamp => now - timestamp < RATE_LIMIT_WINDOW
    );
    if (recentAttempts.length === 0) {
      downloadAttempts.delete(ip);
    } else {
      downloadAttempts.set(ip, recentAttempts);
    }
  }
}

function isRateLimited(ip) {
  cleanupOldAttempts();
  const attempts = downloadAttempts.get(ip) || [];
  return attempts.length >= MAX_DOWNLOADS_PER_WINDOW;
}

function recordDownload(ip) {
  const attempts = downloadAttempts.get(ip) || [];
  attempts.push(Date.now());
  downloadAttempts.set(ip, attempts);
  
  // Log download for monitoring
  downloadLog.push({
    ip,
    timestamp: new Date().toISOString(),
    userAgent: 'logged-separately'
  });
  
  // Keep only last 1000 logs
  if (downloadLog.length > 1000) {
    downloadLog.shift();
  }
}

async function verifyRecaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secret) {
    console.error('RECAPTCHA_SECRET_KEY not configured');
    return { success: false, score: 0 };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secret}&response=${token}`,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { success: false, score: 0 };
  }
}

function generateSignedUrl(filename) {
  const secret = process.env.DOWNLOAD_SECRET || 'change-this-in-production';
  const timestamp = Date.now();
  const expiresIn = 5 * 60 * 1000; // 5 minutes
  const expires = timestamp + expiresIn;
  
  const signature = crypto
    .createHmac('sha256', secret)
    .update(`${filename}:${expires}`)
    .digest('hex');
  
  return {
    url: `/api/download/serve?file=${encodeURIComponent(filename)}&expires=${expires}&signature=${signature}`,
    expires
  };
}

export async function POST(request) {
  try {
    const { recaptchaToken, filename = 'BNG Global Convention 2026.pdf' } = await request.json();
    
    // Get client IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { 
          error: 'Too many download attempts. Please try again in a few minutes.',
          code: 'RATE_LIMIT_EXCEEDED'
        },
        { status: 429 }
      );
    }
    
    // Verify reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'CAPTCHA verification required', code: 'CAPTCHA_MISSING' },
        { status: 400 }
      );
    }
    
    const recaptchaResult = await verifyRecaptcha(recaptchaToken);
    
    if (!recaptchaResult.success) {
      console.warn('reCAPTCHA verification failed:', {
        ip,
        errors: recaptchaResult['error-codes']
      });
      return NextResponse.json(
        { error: 'CAPTCHA verification failed', code: 'CAPTCHA_INVALID' },
        { status: 403 }
      );
    }
    
    // Check reCAPTCHA score (v3 provides score 0.0-1.0)
    // 0.0 = bot, 1.0 = human
    const minScore = 0.5;
    if (recaptchaResult.score < minScore) {
      console.warn('Low reCAPTCHA score:', {
        ip,
        score: recaptchaResult.score
      });
      return NextResponse.json(
        { 
          error: 'Security check failed. Please try again or contact support.',
          code: 'LOW_SCORE'
        },
        { status: 403 }
      );
    }
    
    // Record successful download
    recordDownload(ip);
    
    // Generate signed URL
    const { url, expires } = generateSignedUrl(filename);
    
    return NextResponse.json({
      success: true,
      downloadUrl: url,
      expiresAt: new Date(expires).toISOString(),
      message: 'Download link generated successfully'
    });
    
  } catch (error) {
    console.error('Download API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', code: 'SERVER_ERROR' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to check download stats (admin only)
export async function GET(request) {
  const authToken = request.headers.get('authorization');
  
  // Simple auth check (replace with proper authentication)
  if (authToken !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  cleanupOldAttempts();
  
  return NextResponse.json({
    activeIPs: downloadAttempts.size,
    recentDownloads: downloadLog.slice(-100),
    stats: {
      totalTracked: downloadLog.length,
      lastHour: downloadLog.filter(
        log => Date.now() - new Date(log.timestamp).getTime() < 60 * 60 * 1000
      ).length
    }
  });
}
