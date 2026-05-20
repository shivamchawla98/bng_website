"use client";

import { useState, useCallback } from 'react';

export function useProtectedDownload() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(null);

  const downloadBrochure = useCallback(async (filename = 'BNG Global Convention 2026.pdf') => {
    setIsDownloading(true);
    setError(null);

    try {
      // Check if reCAPTCHA is loaded
      if (typeof window.grecaptcha === 'undefined') {
        throw new Error('Security check not loaded. Please refresh the page.');
      }

      // Execute reCAPTCHA v3
      const token = await new Promise((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'download_brochure' })
            .then(resolve)
            .catch(reject);
        });
      });

      // Request signed download URL from API
      const response = await fetch('/api/download/brochure', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recaptchaToken: token,
          filename: filename,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error codes
        if (data.code === 'RATE_LIMIT_EXCEEDED') {
          throw new Error('Too many downloads. Please wait a moment and try again.');
        } else if (data.code === 'CAPTCHA_INVALID') {
          throw new Error('Security verification failed. Please refresh and try again.');
        } else if (data.code === 'LOW_SCORE') {
          throw new Error('Security check failed. Please try again or contact support.');
        }
        throw new Error(data.error || 'Download failed. Please try again.');
      }

      // Download file using signed URL
      const link = document.createElement('a');
      link.href = data.downloadUrl;
      link.download = filename.replace('.pdf', '_BNG.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return { success: true };
    } catch (err) {
      console.error('Download error:', err);
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setIsDownloading(false);
    }
  }, []);

  return {
    downloadBrochure,
    isDownloading,
    error,
    clearError: () => setError(null),
  };
}
