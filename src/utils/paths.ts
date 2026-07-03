/** Prefixo para rotas internas compatível com GitHub Pages (base path). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalizedPath}`;
}
