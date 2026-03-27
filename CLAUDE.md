Este proyecto usa `AGENTS.md` como fuente principal de convenciones y reglas.

Antes de cambiar código:
- Lee `AGENTS.md`.
- Usa `pnpm`.
- Valida con `pnpm build`.

Estado actual relevante:
- Astro 5 + Tailwind 4.
- `@astrojs/netlify` con `output: "server"`.
- `src/pages/index.astro` está prerenderizada.
- `/api/contact` envía correos con Resend y requiere variables de entorno.
- `plans/` contiene notas de arquitectura útiles para futuras iteraciones.
