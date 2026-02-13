# NEO LUM Documentation

Documentación base del proyecto **NEO LUM Landing Page** construido con **Astro 5** y **Tailwind CSS 4**.

## Stack actual

- Framework: Astro (`.astro` pages con render estático/SSR según necesidad)
- Estilos: Tailwind CSS v4 desde `src/styles/global.css`
- Lenguaje: TypeScript habilitado por configuración de Astro

## Quick Start

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

Servidor local por defecto: `http://localhost:4321`.

## Estructura actual del proyecto

```text
/
├── public/                 # Assets estáticos (favicon, imágenes, etc.)
├── src/
│   ├── pages/
│   │   └── index.astro     # Ruta principal
│   └── styles/
│       └── global.css      # Entrada global de Tailwind
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Convenciones recomendadas para crecer el proyecto

- Crear componentes reutilizables en `src/components/`.
- Mantener contenido estático/configurable en `src/content/` o `src/constants/`.
- Mantener páginas en `src/pages/` con responsabilidad de composición.
- Evitar JS del lado cliente salvo interactividad real (hidratar de forma selectiva).

## Documentos relacionados

- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md): tokens, patrones UI y reglas de implementación en Astro.
- [QUICK_REFERENCE.md](./QUICK_REFERENCE.md): snippets de uso rápido y comandos frecuentes.
