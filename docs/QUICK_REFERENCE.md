# Quick Reference - Astro + Tailwind

Guía rápida para trabajar en este proyecto sin perder consistencia.

## Comandos clave

```bash
npm run dev       # Servidor local (localhost:4321)
npm run build     # Build de producción en dist/
npm run preview   # Vista previa del build
npm run astro -- --help
```

## Rutas y archivos importantes

```text
src/pages/index.astro      # Landing principal
src/styles/global.css      # Tailwind v4 + estilos globales
public/                    # Assets estáticos
astro.config.mjs           # Config de Astro
```

## Snippets Astro frecuentes

### Página básica

```astro
---
import "../styles/global.css";
---

<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>NEO LUM</title>
  </head>
  <body class="min-h-screen bg-white text-gray-900">
    <h1 class="text-3xl font-bold">Landing Page</h1>
  </body>
</html>
```

### Sección reusable (recomendado)

```astro
---
interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<section class="py-12 md:py-16">
  <h2 class="text-2xl md:text-4xl font-semibold">{title}</h2>
  <p class="mt-4 text-base md:text-lg text-gray-700">{description}</p>
</section>
```

## Patrones de clases Tailwind

- Container: `max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8`
- Grid cards: `grid gap-6 md:grid-cols-2 lg:grid-cols-3`
- CTA button: `inline-flex items-center justify-center rounded-lg px-5 py-3`

## Reglas rápidas

- Evitar JS cliente si no hay interactividad real.
- Mantener secciones desacopladas y componibles.
- Reutilizar estilos/patrones antes de duplicar markup.
