# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/`: rutas Astro y composición de páginas.
- `src/layouts/`: shells compartidos y estructura base.
- `src/components/`: UI reutilizable (ver `ui/`, `sections/`, `cards/`, `services/`, `testimonials/`).
- `src/scripts/`: scripts JS específicos (p. ej., `roi-calculator.js`).
- `src/styles/`: estilos globales y tokens (`global.css`, `variables.css`).
- `src/constants/`: contenido estático y rutas de assets tipadas.
- `public/`: assets servidos tal cual (imágenes, SVG, Lottie).
- `dist/`: output de build (generado).

## Build, Test, and Development Commands
Usa `pnpm`.
- `pnpm dev`: servidor local con hot reload.
- `pnpm build`: build de producción a `dist/`.
- `pnpm preview`: previsualiza el build.
- `pnpm lint`: ESLint en `src/**/*.{ts,tsx,js,jsx,astro}`.
- `pnpm format`: Prettier en `src/**/*.{ts,tsx,js,jsx,astro,css,md}`.

## Coding Style & Naming Conventions
- Indentación: 2 espacios.
- Componentes Astro en `PascalCase.astro` (ej. `HeroSection.astro`).
- Un componente por archivo; páginas componen secciones.
- Prefiere TypeScript explícito (evita `any`).

## Tailwind & @apply Rules
- Usa utilidades Tailwind en el markup; evita estilos inline.
- `@apply` solo en `src/styles/global.css` para resets, tipografía base y utilidades reutilizables puntuales (ej. `.skip-link`).
- No uses `@apply` para componer componentes completos; extrae a un componente o a una clase utilitaria clara.
- Tokens de color y tipografía vienen de `src/styles/variables.css` y se exponen en `tailwind.config.ts` (ej. `text-primary`, `bg-surface`).

## Static Content & Constants
- Contenido estático repetido vive en `src/constants/` o `src/config/`.
- Evita hardcodear textos largos, rutas de assets o listas en componentes.
- Tipar los datos exportados (ej. `NAV_LINKS`, `ASSETS`) y mantenerlos como única fuente de verdad.

## Testing Guidelines
No hay tests configurados aún. Si se agregan, documenta el framework y crea el script correspondiente (ej. `pnpm test`). Nombres por feature: `HeroSection.test.ts`.

## Commit & Pull Request Guidelines
- Convención basada en historial: `feat:`, `refactor:`, `update:`. Ejemplo: `feat: add pricing comparison table`.
- PRs: descripción clara, issue/tarea ligada si existe y screenshots para cambios visuales.

## Security & Configuration Tips
- No subir secretos. Usa variables de entorno cuando aplique y documenta en README.
- Cambios de assets en `public/` y contenido en `src/constants/`/`src/config/` para evitar hardcoding.
