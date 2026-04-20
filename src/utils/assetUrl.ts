/**
 * Resolves a public-folder asset path against Vite's configured base URL.
 *
 * Use this instead of bare absolute paths (e.g. '/images/team/photo.jpg')
 * in data files. Vite does not rewrite plain strings — only imports and
 * template literals it can statically analyse — so absolute paths break
 * when the site is served from a subdirectory (e.g. GitHub Pages).
 *
 * import.meta.env.BASE_URL is '/' in dev and '/EiT_Pyton/' in production.
 *
 * @example
 * assetUrl('images/team/hourshid.jpg')
 * // dev  → '/images/team/hourshid.jpg'
 * // prod → '/EiT_Pyton/images/team/hourshid.jpg'
 */
export function assetUrl(path: string): string {
  // Strip a leading slash so we never double-up: '/EiT_Pyton//images/…'
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
