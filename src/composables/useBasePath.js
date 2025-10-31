// src/composables/useBasePath.js
export function withBase(p) {
  const base = import.meta.env.BASE_URL || '/';
  // quita slashes iniciales y evita dobles slashes
  return `${base}${String(p).replace(/^\/+/, '')}`.replace(/\/{2,}/g, '/');
}
