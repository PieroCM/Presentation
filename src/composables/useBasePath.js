export function withBase(p) {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${String(p).replace(/^\/+/, '')}`.replace(/\/{2,}/g, '/');
}
