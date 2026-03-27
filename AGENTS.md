# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/`: rutas Astro y composición de páginas.
- `src/components/layout/`: shells compartidos y estructura base.
- `src/components/`: UI reutilizable (ver `ui/`, `sections/`, `cards/`, `services/`, `testimonials/`).
- `src/styles/`: estilos globales y tokens (`global.css`).
- `src/constants/`: contenido estático y rutas de assets tipadas.
- `plans/`: notas de arquitectura y auditorías accionables del proyecto.
- `public/`: assets servidos tal cual (imágenes, SVG, Lottie).
- `dist/`: output de build (generado).

## Build, Test, and Development Commands
Usa `pnpm`.
- `pnpm dev`: servidor local con hot reload.
- `pnpm build`: build de producción a `dist/`.
- `pnpm preview`: previsualiza el build.
- `pnpm install`: instala dependencias.

Actualmente no existen scripts de `lint`, `format` ni `test` en `package.json`.

## Coding Style & Naming Conventions
- Indentación: 2 espacios.
- Componentes Astro en `PascalCase.astro` (ej. `HeroSection.astro`).
- Un componente por archivo; páginas componen secciones.
- Prefiere TypeScript explícito (evita `any`).

## Tailwind & @apply Rules
- Usa utilidades Tailwind en el markup; evita estilos inline.
- `@apply` solo en `src/styles/global.css` para resets, tipografía base y utilidades reutilizables puntuales (ej. `.skip-link`).
- No uses `@apply` para componer componentes completos; extrae a un componente o a una clase utilitaria clara.
- El proyecto usa Tailwind v4 vía `@import "tailwindcss"` en `src/styles/global.css`; no depende de `tailwind.config.ts`.
- Los tokens actuales viven en `:root` dentro de `src/styles/global.css`.

## Static Content & Constants
- Contenido estático repetido vive en `src/constants/` o `src/config/`.
- Evita hardcodear textos largos, rutas de assets o listas en componentes.
- Tipar los datos exportados (ej. `NAV_LINKS`, `ASSETS`) y mantenerlos como única fuente de verdad.
- `siteConfig` y `contactDetails` son la fuente de verdad para dominio, sharing y datos de contacto.

## Testing Guidelines
No hay tests automatizados configurados aún. La validación actual se hace con `pnpm build` y revisión manual en `pnpm preview` o en entorno de despliegue.

## Commit & Pull Request Guidelines
- Convención basada en historial: `feat:`, `refactor:`, `update:`. Ejemplo: `feat: add pricing comparison table`.
- PRs: descripción clara, issue/tarea ligada si existe y screenshots para cambios visuales.

## Security & Configuration Tips
- No subir secretos. Usa variables de entorno cuando aplique y documenta en README.
- Cambios de assets en `public/` y contenido en `src/constants/`/`src/config/` para evitar hardcoding.
- El formulario depende de `RESEND_API_KEY`, `CONTACT_TO_EMAIL` y `CONTACT_FROM_EMAIL`.
- El despliegue actual usa `@astrojs/netlify` con `output: "server"` para soportar `/api/contact`.
- `.netlify/`, `dist/`, `.astro/`, `node_modules/` y archivos de entorno deben quedar fuera del repo.

## Current Architecture Notes
- `src/pages/index.astro` está prerenderizada explícitamente.
- `src/pages/api/contact.ts` es la ruta server-side para envíos por Resend.
- `SectionContainer.astro` ya propaga `class` al `<section>` externo; úsalo cuando la sección necesite fondo o hooks a nivel wrapper.
- `HeroSection.astro` y `ServicesSection.astro` contienen interacciones client-side ligeras; al tocarlas, prioriza estabilidad visual y evita regresiones de scroll/hover.
