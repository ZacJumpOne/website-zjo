/**
 * Sanitizes HTML string by removing dangerous tags, event handlers, and unsafe URLs.
 * Safe tags: a, p, br, strong, em, ul, ol, li, span, b, i, u.
 */
export function sanitizeHTML(html: string): string {
  let sanitized = html;

  const dangerousTags = ['script', 'iframe', 'object', 'embed', 'svg', 'img', 'form', 'input', 'button', 'textarea', 'select', 'style', 'link', 'meta', 'base', 'video', 'audio', 'source'];
  for (const tag of dangerousTags) {
    sanitized = sanitized.replace(new RegExp(`<${tag}(\\s[^>]*)?>`, 'gi'), '');
    sanitized = sanitized.replace(new RegExp(`</${tag}>`, 'gi'), '');
  }

  sanitized = sanitized.replace(/\son\w+\s*=\s*["'][^"']*["']/gi, '');
  sanitized = sanitized.replace(/\son\w+\s*=\s*\S+/gi, '');

  sanitized = sanitized.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href="#"');
  sanitized = sanitized.replace(/href\s*=\s*javascript:\S+/gi, 'href="#"');

  sanitized = sanitized.replace(/(\w+)\s*=\s*["']data:[^"']*["']/gi, '$1=""');

  return sanitized;
}
