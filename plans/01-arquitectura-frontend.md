# 01 — Mejoras de Arquitectura Frontend

> Auditoría generada el 2026-03-20 con el agente architect.\
> Prioridades ordenadas por impacto en Lighthouse, seguridad y mantenibilidad.

---

## Fase 1: Quick Wins Críticos

Cambios que se resuelven en minutos y tienen el mayor retorno.

### 1.1 Eliminar Font Awesome no utilizado
- **Archivo:** `src/components/layout/MainLayout.astro`
- Eliminar `<link rel="stylesheet" href="...font-awesome...">` — no se usa ningún icono `fa-*`
- **Impacto:** −160KB de assets bloqueantes (~300ms en 3G)

### 1.2 Preload de fuentes tipográficas
- **Archivo:** `src/components/layout/MainLayout.astro`
- Agregar `<link rel="preload">` para Myriad Pro Regular y Bold (`.woff2`)
- **Impacto:** Reduce FOUT, mejora LCP

### 1.3 Eliminar ZIP de 2.9MB en `public/`
- **Archivo:** `public/assets/export_2026-03-12T19_23_46-926Z.zip`
- Eliminar del repo y agregar `*.zip` al `.gitignore`

### 1.4 Eliminar `package-lock.json` duplicado
- El proyecto usa pnpm; `package-lock.json` genera confusión
- Agregar `package-lock.json` al `.gitignore`

---

## Fase 2: Seguridad y SEO

### 2.1 Sanitizar HTML en API de contacto (XSS)
- **Archivo:** `src/pages/api/contact.ts`
- Escapar `<`, `>`, `&`, `"` en todos los campos del usuario antes de insertarlos en el HTML del email
- **Impacto:** Previene inyección HTML en emails — vector de phishing con dominio propio

### 2.2 Agregar `robots.txt` + sitemap
- Crear `public/robots.txt` con `Allow: /` y referencia al sitemap
- Instalar `@astrojs/sitemap` y registrar en `astro.config.mjs`

### 2.3 Structured data JSON-LD
- **Archivo:** `src/components/layout/MainLayout.astro`
- Agregar `<script type="application/ld+json">` con schema `Organization` (nombre, logo, URL, redes)

---

## Fase 3: Rendimiento y Accesibilidad

### 3.1 Agregar `width`/`height` a todas las `<img>`
- **Archivos:** `HeroSection.astro`, `ServicesSection.astro`, `ProjectsSection.astro`, `SiteHeader.astro`, `SiteFooter.astro`, `ProcessSection.astro`
- **Impacto:** Elimina CLS (Cumulative Layout Shift)

### 3.2 Corregir acentuación en textos y `aria-label`
- `"Seccion"` → `"Sección"`, `"Codigo"` → `"Código"`, `"menu"` → `"menú"`, `"Numero"` → `"Número"`, `"invalidos"` → `"inválidos"`, `"Ocurrio"` → `"Ocurrió"`, etc.
- Revisión sistemática en todos los componentes y en el API de contacto

### 3.3 Migrar scripts de `is:inline` a módulos ESM
- **Archivos:** `HeroSection.astro`, `ContactSection.astro`, `ProcessSection.astro`, `SiteHeader.astro`
- Quitar `is:inline` para que Astro procese, minifique y deduplique los scripts

---

## Fase 4: Consistencia y Mantenibilidad

### 4.1 Registrar tokens CSS en `@theme` de Tailwind v4
- **Archivo:** `src/styles/global.css`
- Usar `@theme { --color-primary: ...; }` para habilitar clases como `text-primary`, `bg-surface`
- Reemplazar `text-[var(--color-primary)]` por `text-primary` en todos los componentes

### 4.2 Limpiar props no usadas de `SectionContainer`
- **Archivo:** `src/components/layout/SectionContainer.astro`
- Eliminar `isContent`, `flushMobile`, `class` — están desestructuradas pero nunca se aplican

### 4.3 Mover datos hardcodeados a constantes
- Array `projects` de `ProjectsSection.astro` → `src/constants/site.ts`
- Array `slides` de `HeroSection.astro` → `src/constants/site.ts`

### 4.4 Unificar patrón de `ProcessSection`
- Refactorizar para usar `SectionContainer` como wrapper externo, igual que el resto de secciones

### 4.5 Limpiar assets y archivos no usados
- Verificar y eliminar imágenes sin referencia: `neolum11x.webp`, `neolum21x.webp`, `Group 1.svg`, `NEOLUM_FLECHAS.svg`
- Eliminar `screenshot.js` y `footer_screenshot.png` de la raíz del proyecto
- Eliminar `src/components/ui/SliderDots.astro` si no se planea usar

### 4.6 Actualizar AGENTS.md para reflejar la realidad
- Corregir referencia a `variables.css` (no existe — las variables están en `global.css`)
- Corregir referencia a `tailwind.config.ts` (Tailwind v4 se configura vía CSS)
- Ajustar referencia a `pnpm lint` / `pnpm format` (no configurados en `package.json`)

---

## Fase 5: Mejoras Diferidas (Backlog)

- **Focus trap** en menú mobile (`SiteHeader.astro`) — mejora accesibilidad para usuarios de teclado
- **Controles de teclado** para slider del hero (flechas izquierda/derecha)
- **Rate limiting / honeypot** en endpoint de contacto (`/api/contact`)
- **Pipeline de imágenes Astro:** mover imágenes a `src/assets/` y usar componente `<Image>` para optimización automática (srcset, WebP, dimensiones)
- **Path aliases** (`@/`) en `tsconfig.json` para imports más limpios
- **Configurar ESLint + Prettier** con sus scripts en `package.json`

---

## Verificación por Fase

Después de cada fase ejecutar:

```bash
pnpm build           # Sin errores de compilación
pnpm preview         # Verificar visual en navegador
```

Adicionalmente:
- **Lighthouse audit** (Performance, Accessibility, SEO, Best Practices) en Chrome DevTools
- Verificar que el **formulario de contacto** sigue enviando correctamente
- Verificar **navegación mobile** (menú hamburguesa, slider del hero)

---

## Archivos Críticos

| Archivo | Fases |
|---------|-------|
| `src/components/layout/MainLayout.astro` | 1, 2, 3 |
| `src/pages/api/contact.ts` | 2 |
| `src/components/sections/HeroSection.astro` | 3, 4 |
| `src/components/sections/ProjectsSection.astro` | 3, 4 |
| `src/components/sections/ContactSection.astro` | 3 |
| `src/components/layout/SectionContainer.astro` | 4 |
| `src/styles/global.css` | 4 |
| `AGENTS.md` | 4 |

---

## Resumen de Prioridades

| # | Hallazgo | Severidad | Esfuerzo |
|---|----------|-----------|----------|
| 1 | Eliminar Font Awesome no utilizado | 🔴 Crítico | 1 min |
| 2 | Preload de fuentes | 🔴 Crítico | 2 min |
| 3 | Eliminar ZIP 2.9MB de `public/` | 🔴 Crítico | 1 min |
| 4 | Sanitizar HTML en API (XSS) | 🔴 Crítico | 15 min |
| 5 | Agregar robots.txt + sitemap | 🔴 Crítico | 10 min |
| 6 | Agregar width/height a imágenes | 🔴 Crítico | 20 min |
| 7 | Corregir acentuación en textos | 🔴 Crítico | 15 min |
| 8 | Tokens CSS en @theme Tailwind v4 | 🟡 Importante | 20 min |
| 9 | Migrar scripts is:inline a módulos | 🟡 Importante | 30 min |
| 10 | Limpiar SectionContainer props | 🟡 Importante | 5 min |
| 11 | Focus trap menú mobile | 🟡 Importante | 30 min |
| 12 | JSON-LD structured data | 🟡 Importante | 15 min |
| 13 | Eliminar imágenes y archivos no usados | 🟡 Importante | 5 min |
| 14 | Mover proyectos/slides a constantes | 🟡 Importante | 10 min |
| 15 | Eliminar SliderDots no usado | 🟢 Recomendado | 2 min |
| 16 | Rate limiting / honeypot en formulario | 🟢 Recomendado | 30 min |
| 17 | Limpiar archivos sueltos en raíz | 🟢 Recomendado | 5 min |
| 18 | Actualizar AGENTS.md | 🟢 Recomendado | 15 min |
