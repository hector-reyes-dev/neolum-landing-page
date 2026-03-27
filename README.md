# NEO LUM - Landing Page

Landing page institucional para NEO LUM, agencia especializada en estrategia, identidad y crecimiento de marca para pymes.

## 🚀 Tecnologías

- **Astro 5** - Framework web moderno
- **Tailwind CSS 4** - Estilos utilitarios
- **TypeScript** - Tipado estático
- **Resend** - Envío real del formulario de contacto
- **Netlify Adapter** - Runtime server para `/api/contact`

## 🛠️ Comandos

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

No hay scripts de `lint` ni `format` configurados actualmente en `package.json`.

## 🔐 Variables de entorno

Para habilitar el envío del formulario de contacto con Resend:

```sh
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=neolum.consultoria@gmail.com
CONTACT_FROM_EMAIL=contacto@neolum.com.mx
```

Notas:
- `CONTACT_FROM_EMAIL` debe estar verificado/autorizado en Resend.
- El formulario depende de un runtime server; en producción no funciona como sitio 100% estático.

## 📁 Estructura

```
src/
├── components/
│   ├── layout/      # Componentes de estructura (Header, Footer, Layout)
│   ├── sections/    # Secciones de la página (Hero, Servicios, Proyectos, Contacto, Proceso)
│   └── ui/          # Componentes reutilizables
├── constants/       # Datos estaticos y contenido
├── pages/          # Rutas Astro
├── plans/          # Notas y auditorías de arquitectura/frontend
└── styles/         # Estilos globales y variables
```

## ✨ Estado actual del sitio

- Hero con carrusel navegable por puntos y avance al tocar/clic en el área visual.
- Sección de servicios con animación hover por fila completa.
- Sección de proceso con título visible en mobile.
- Footer con enlaces clicables de Instagram y correo.
- SEO base con `canonical`, Open Graph, Twitter cards y social image PNG.
- Home prerenderizada y endpoint `/api/contact` servido por adapter server.

## 🎨 Design System

- **Color primario:** `#d54427` (naranja NEO LUM)
- **Fondo sección:** `#eff8f4` (verde claro)
- **Fondo general:** `#ffffff` (blanco)
- **Texto:** `#1a1a1a`

## 📱 Responsive

El sitio está optimizado para:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌐 Despliegue

El proyecto está configurado con:

- `site: https://www.neolum.com.mx`
- `output: "server"`
- `@astrojs/netlify` como adapter

Esto permite:
- prerender de la home (`src/pages/index.astro`)
- runtime server para `/api/contact`

Si se despliega fuera de Netlify, hay que reemplazar el adapter manteniendo soporte server para el endpoint de contacto.

Repositorio: https://github.com/hector-reyes-dev/neolum-landing-page
