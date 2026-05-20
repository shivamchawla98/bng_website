import { NextResponse } from 'next/server';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

function verifySignature(filename, expires, signature) {
  const secret = process.env.DOWNLOAD_SECRET || 'change-this-in-production';
  
  // Check expiration
  if (Date.now() > parseInt(expires)) {
    return { valid: false, reason: 'expired' };
  }
  
  // Verify signature
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(`${filename}:${expires}`)
    .digest('hex');
  
  if (signature !== expectedSignature) {
    return { valid: false, reason: 'invalid_signature' };
  }
  
  return { valid: true };
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('file');
    const expires = searchParams.get('expires');
    const signature = searchParams.get('signature');
    
    if (!filename || !expires || !signature) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }
    
    // Verify signature
    const verification = verifySignature(filename, expires, signature);
    if (!verification.valid) {
      return NextResponse.json(
        { 
          error: verification.reason === 'expired' 
            ? 'Download link has expired. Please request a new one.' 
            : 'Invalid download link',
          code: verification.reason.toUpperCase()
        },
        { status: 403 }
      );
    }
    
    // Sanitize filename to prevent directory traversal
    const safeFilename = path.basename(filename);
    const filePath = path.join(process.cwd(), 'public', 'download', safeFilename);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }
    
    // Read file
    const fileBuffer = fs.readFileSync(filePath);
    
    // Return file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${safeFilename}"`,
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'X-Content-Type-Options': 'nosniff',
      },
    });
    
  } catch (error) {
    console.error('File serve error:', error);
    return NextResponse.json(
      { error: 'Failed to serve file' },
      { status: 500 }
    );
  }
}
