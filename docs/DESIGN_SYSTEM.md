# NEO LUM Design System (Astro)

Este documento define la base visual y de implementación UI para el landing page en Astro.

## Objetivo

Mantener consistencia visual, accesibilidad y rendimiento usando componentes simples, reutilizables y orientados a contenido.

## Design Tokens

Definir tokens en `:root` dentro de `src/styles/global.css` (o en un archivo de tokens importado desde ahí).

```css
:root {
  --color-primary: #d54427;
  --color-background: #eff8f4;
  --color-foreground: #1a1a1a;
  --radius-md: 0.5rem;
  --container-max: 1440px;
}
```

## Tipografía

- Base: `16px`
- Escala recomendada:
  - Hero: `text-4xl md:text-6xl`
  - Section title: `text-2xl md:text-4xl`
  - Body: `text-base md:text-lg`
- Priorizar clases utilitarias de Tailwind y semántica HTML (`h1`, `h2`, `p`, `small`).

## Layout y Espaciado

- Contenedor principal centrado con ancho máximo: `max-w-[1440px] mx-auto`.
- Padding horizontal responsivo: `px-4 md:px-6 lg:px-8`.
- Ritmo vertical por secciones: `py-12 md:py-16 lg:py-24`.

## Arquitectura de Componentes (recomendada)

```text
src/
├── components/
│   ├── ui/              # Botón, badge, card, etc.
│   ├── sections/        # Hero, Features, CTA, Footer
│   └── layout/          # Header, containers, wrappers
├── pages/
└── styles/
```

Reglas:
- Un componente, una responsabilidad.
- Sin lógica de negocio en `sections`.
- Props tipadas cuando haya scripts TypeScript en componentes Astro.

## Accesibilidad

- Contraste mínimo AA.
- `alt` obligatorio en imágenes informativas.
- Estados de foco visibles (`focus-visible`).
- Jerarquía de headings sin saltos (`h1 -> h2 -> h3`).

## Rendimiento

- Preferir HTML estático en Astro por defecto.
- Usar hidratación (`client:*`) solo para interacción real.
- Optimizar assets en `public/` y evitar imágenes sobredimensionadas.

## Checklist de UI antes de merge

- Layout responsive probado en mobile y desktop.
- Tokens y colores consistentes.
- Sin componentes duplicados con la misma función.
- Lighthouse aceptable (especialmente Performance y Accessibility).
