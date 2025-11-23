/**
 * Format date to readable string
 * @param {string|Date} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  if (!date) return '';
  
  const d = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return d.toLocaleDateString('en-US', options);
};

/**
 * Format date to relative time (e.g., "2 days ago")
 * @param {string|Date} date - Date to format
 * @returns {string} Relative time string
 */
export const formatRelativeTime = (date) => {
  if (!date) return '';
  
  const now = new Date();
  const d = new Date(date);
  const seconds = Math.floor((now - d) / 1000);
  
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };
  
  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
    }
  }
  
  return 'Just now';
};

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param {string} html - HTML string to sanitize
 * @returns {string} Sanitized HTML
 */
export const sanitizeHtml = (html) => {
  if (!html) return '';
  
  // Allow safe tags and attributes
  const allowedTags = [
    'p', 'br', 'strong', 'em', 'u', 's', 'a', 'img', 
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li', 'blockquote', 'code', 'pre',
    'table', 'thead', 'tbody', 'tr', 'th', 'td',
    'div', 'span', 'iframe'
  ];
  
  const allowedAttributes = {
    'a': ['href', 'title', 'target', 'rel'],
    'img': ['src', 'alt', 'title', 'width', 'height'],
    'iframe': ['src', 'width', 'height', 'frameborder', 'allowfullscreen'],
    '*': ['class', 'id']
  };
  
  // For now, return as-is (you can integrate DOMPurify on client-side later)
  return html;
};

/**
 * Extract plain text from HTML
 * @param {string} html - HTML string
 * @returns {string} Plain text
 */
export const stripHtml = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').trim();
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 150) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Generate excerpt from HTML content
 * @param {string} html - HTML content
 * @param {number} maxLength - Maximum length
 * @returns {string} Excerpt
 */
export const generateExcerpt = (html, maxLength = 150) => {
  const text = stripHtml(html);
  return truncateText(text, maxLength);
};

/**
 * Format view count (e.g., 1.2K, 1.5M)
 * @param {number} count - View count
 * @returns {string} Formatted count
 */
export const formatViewCount = (count) => {
  if (!count || count < 1000) return count?.toString() || '0';
  
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M';
  }
  
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K';
  }
  
  return count.toString();
};

/**
 * Generate table of contents from HTML content
 * @param {string} html - HTML content
 * @returns {Array} Array of TOC items {id, text, level}
 */
export const generateTOC = (html) => {
  if (!html) return [];
  
  const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h\1>/gi;
  const toc = [];
  let match;
  let index = 0;
  
  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const text = stripHtml(match[2]);
    const id = `heading-${index}`;
    
    toc.push({ id, text, level });
    index++;
  }
  
  return toc;
};

/**
 * Inject IDs into headings for TOC navigation
 * @param {string} html - HTML content
 * @returns {string} HTML with ID'd headings
 */
export const injectHeadingIds = (html) => {
  if (!html) return '';
  
  let index = 0;
  return html.replace(/<h([2-3])([^>]*)>(.*?)<\/h\1>/gi, (match, level, attrs, content) => {
    const id = `heading-${index}`;
    index++;
    
    // Check if ID already exists
    if (attrs.includes('id=')) {
      return match;
    }
    
    return `<h${level}${attrs} id="${id}">${content}</h${level}>`;
  });
};

/**
 * Check if content has embedded YouTube video
 * @param {string} html - HTML content
 * @returns {boolean} True if has YouTube video
 */
export const hasYouTubeVideo = (html) => {
  if (!html) return false;
  return /youtube\.com|youtu\.be/i.test(html);
};

/**
 * Check if content has embedded Vimeo video
 * @param {string} html - HTML content
 * @returns {boolean} True if has Vimeo video
 */
export const hasVimeoVideo = (html) => {
  if (!html) return false;
  return /vimeo\.com/i.test(html);
};

/**
 * Get social share URLs
 * @param {string} url - Page URL
 * @param {string} title - Page title
 * @param {string} description - Page description
 * @returns {Object} Social share URLs
 */
export const getSocialShareUrls = (url, title, description = '') => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  };
};

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export const copyToClipboard = async (text) => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textArea);
    return success;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};

/**
 * Generate breadcrumb items
 * @param {string} path - Current path
 * @param {Object} data - Additional data (category name, tag name, etc.)
 * @returns {Array} Breadcrumb items
 */
export const generateBreadcrumbs = (path, data = {}) => {
  const breadcrumbs = [
    { label: 'Home', href: '/' }
  ];
  
  if (path.startsWith('/blog')) {
    breadcrumbs.push({ label: 'Blog', href: '/blog' });
    
    if (path.includes('/category/') && data.categoryName) {
      breadcrumbs.push({ label: data.categoryName, href: path });
    } else if (path.includes('/tag/') && data.tagName) {
      breadcrumbs.push({ label: `Tag: ${data.tagName}`, href: path });
    } else if (path.includes('/search')) {
      breadcrumbs.push({ label: 'Search Results', href: path });
    } else if (data.blogTitle) {
      breadcrumbs.push({ label: data.blogTitle, href: path });
    }
  }
  
  return breadcrumbs;
};

/**
 * Debounce function for search
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
