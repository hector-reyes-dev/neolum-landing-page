# Plan de Cambios - Comparativo Actual vs Propuesta 02

Este plan reemplaza y corrige el anterior para alinear la implementación con el diseño **02** (segunda referencia).  
Base de comparación:
- **Actual:** implementación local en `http://localhost:4321/`.
- **Objetivo:** mockup 02 (desktop) compartido en contexto.

## 1. Resumen Ejecutivo

El gap principal está en:
- Header (forma, ancho y CTA derecha).
- Hero (escala tipográfica y composición exacta 50/50).
- Ritmo visual por secciones (líneas, espaciado y densidad).
- Proyectos (falta completar mosaico visual esperado).
- Footer (proporciones, distribución y jerarquía de logo).

Puntos del plan previo que **no aplican** para 02:
- Crear `DividerText` como patrón principal.
- Introducir bloques tipo "Proceso" / claims intermedios.

## 2. Matriz de Ajustes (Actual vs 02)

| Área | Actual | Diseño 02 | Ajuste requerido |
|---|---|---|---|
| Header contenedor | Barra con `rounded-full` y padding de shell | Barra rectangular, limpia, a todo lo ancho visual del layout | Quitar redondeo completo y ajustar estructura para look lineal |
| Header CTA derecha | Botón "IG" con fondo primario | Botón/píldora compacto con "IG" integrado al sistema | Reducir peso visual y ajustar tamaño/padding para match de 02 |
| Header navegación | Links con separación amplia | Links compactos y ligeros | Ajustar `font-size`, `gap` y padding horizontal |
| Hero layout | Grid con texto + slider con dots | Split 2 columnas limpias, imagen dominante estática | Desactivar slider/dots y dejar imagen fija para fidelidad visual |
| Hero tipografía | H1 grande pero menor al mock | H1 más protagonista y con mayor peso visual | Incrementar tamaño/peso/leading del H1 |
| Hero copy | Copy actual válido | Copy más compacto visualmente | Ajustar ancho de párrafo y espaciado vertical |
| Secciones (títulos) | `SectionTitle` con borde superior/inferior visible | Franja con línea fina y diamante a la derecha | Mantener patrón pero afinar grosor, padding y escala de título |
| Servicios bloque 1 | Imagen + lista bullets | Igual estructura base | Ajustar alturas, paddings y tamaño de bullets para match exacto |
| Servicios bloque 2 | Lista + imagen | Igual estructura base | Igualar distribución de columnas y ritmo vertical |
| Proyectos | Solo 2 imágenes | Mosaico visual más completo (más presencia editorial) | Completar composición (mínimo 2x2 o equivalente definido en 02 final) |
| Contacto encabezado | Correcto en estructura base | Mantiene sección limpia con formulario centrado | Conservar estructura; solo afinar espaciados/anchos/estilos de campos |
| Formulario | Muy cercano | Inputs y CTA con proporciones más limpias | Ajuste fino de radios, altura de campos y contraste |
| Footer layout | Correcto pero con jerarquía moderada | Footer más editorial, logo más protagonista | Rebalancear columnas y escalar logo de marca |
| Footer legal bar | Presente en blanco inferior | Presente en composición final | Mantener, verificando tamaño y contraste |

## 3. Ajustes Técnicos por Archivo

- `src/components/layout/SiteHeader.astro`
  - Quitar `rounded-full`.
  - Replantear columna derecha (IG) para que no domine.
  - Compactar navegación.

- `src/components/sections/HeroSection.astro`
  - Sustituir slider por imagen estática principal (sin dots).
  - Escalar tipografía y ajustar ancho del copy.
  - Revisar proporciones de columnas en desktop.

- `src/components/ui/SectionTitle.astro`
  - Afinar líneas, paddings y escala del título.
  - Confirmar posición/tamaño del diamante decorativo.

- `src/components/sections/ServicesSection.astro`
  - Ajuste fino de spacing, bullets y altura de imágenes.
  - Mantener orden visual imagen/texto según 02.

- `src/components/sections/ProjectsSection.astro`
  - Completar layout a mosaico esperado por 02.
  - Definir claramente celdas y recortes de imagen.

- `src/components/sections/ContactSection.astro`
  - Conservar estructura base.
  - Ajustar detalles visuales (inputs, separación y CTA) sin cambiar UX.

- `src/components/layout/SiteFooter.astro`
  - Reforzar jerarquía visual del logo.
  - Ajustar columnas de enlaces/contacto para proporciones 02.

- `src/styles/global.css`
  - Ajustes globales de escala tipográfica, spacing y bordes.
  - Verificar consistencia de tokens de color.

## 4. Criterios de Aceptación (Checklist)

- [ ] Header sin bordes tipo cápsula y con jerarquía correcta.
- [ ] Hero sin comportamiento de slider; imagen y copy alineados a 02.
- [ ] Títulos de sección con línea y diamante consistentes.
- [ ] Servicios con ritmo visual y densidad tipográfica de 02.
- [ ] Proyectos con composición visual completa (no solo 2 imágenes sueltas).
- [ ] Contacto conserva estructura actual pero con acabado visual 02.
- [ ] Footer con logo dominante y mejor balance de columnas.
- [ ] Revisión responsive: mobile + desktop sin romper layout.
- [ ] `pnpm lint` y `pnpm build` en verde.

## 5. Nota de Alcance

Este plan se enfoca en **fidelidad visual y estructura** del 02.  
Si después se requiere pixel-perfect estricto, se agrega una fase de QA visual con capturas comparativas por breakpoint.
