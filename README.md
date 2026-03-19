# NEO LUM - Landing Page

Landing page institucional para NEO LUM, agencia especializada en estrategia, identidad y crecimiento de marca para pymes.

## 🚀 Tecnologias

- **Astro** - Framework web moderno
- **Tailwind CSS** - Estilos utilitarios
- **TypeScript** - Tipado estatico

## 🛠️ Comandos

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## 🔐 Variables de entorno

Para habilitar el envío del formulario de contacto con Resend:

```sh
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=neolum.consultoria@gmail.com
CONTACT_FROM_EMAIL=contacto@neolum.com.mx
```

## 📁 Estructura

```
src/
├── components/
│   ├── layout/      # Componentes de estructura (Header, Footer, Layout)
│   ├── sections/    # Secciones de la pagina (Hero, Servicios, Proyectos, Contacto)
│   └── ui/          # Componentes reutilizables
├── constants/       # Datos estaticos y contenido
├── pages/          # Rutas Astro
└── styles/         # Estilos globales y variables
```

## 🎨 Design System

- **Color primario:** `#d54427` (naranja NEO LUM)
- **Fondo seccion:** `#eff8f4` (verde claro)
- **Fondo general:** `#ffffff` (blanco)
- **Texto:** `#1a1a1a`

## 📱 Responsive

El sitio esta optimizado para:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌐 Despliegue

El proyecto usa Astro con una ruta server-side para `/api/contact`, así que el despliegue debe soportar funciones/SSR para procesar el formulario.

Repositorio: https://github.com/hector-reyes-dev/neolum-landing-page
