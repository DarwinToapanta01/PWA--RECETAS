# Gestor de Recetas PWA

## Descripción
Esta aplicación es un gestor de recetas de cocina desarrollado como una Progressive Web App (PWA) usando una librería propia de Web Components. Permite agregar, visualizar y almacenar recetas de manera offline, y es instalable en cualquier dispositivo compatible.

---

## Pasos realizados según la tarea

### 1. Estructura y Diseño del Proyecto
- Se creó la estructura de carpetas: `/public` (archivos estáticos), `/src` (lógica JS), `/components` (Web Components).
- Se desarrolló un Web Component personalizado `<receta-card>` para mostrar cada receta de forma visual y atractiva.
- Se diseñó una interfaz moderna y responsiva usando CSS en el archivo `index.html` y dentro del Web Component.

### 2. Lógica de la Aplicación
- Toda la lógica está en `src/app.js`.
- Permite agregar recetas mediante un formulario.
- Las recetas se almacenan en `localStorage` para persistencia offline.
- Al cargar la app, se muestran recetas de ejemplo si no hay ninguna guardada.

### 3. Uso de Web Components
- Se creó el archivo `components/receta-card.js` que define el Web Component `<receta-card>`.
- Este componente recibe los atributos `nombre`, `ingredientes` y `pasos` para mostrar la información de cada receta.
- La interfaz principal utiliza este componente para renderizar todas las recetas.

### 4. Funcionalidades PWA
- Se creó el archivo `public/manifest.json` con los campos requeridos: `name`, `short_name`, `start_url`, `display`, `background_color`, `theme_color` e `icons`.
- El manifiesto está enlazado en el `<head>` de `index.html`.
- Se implementó un Service Worker en `src/service-worker.js`:
  - Evento `install`: cachea los archivos esenciales (HTML, JS, manifest, íconos, Web Components).
  - Evento `fetch`: estrategia "Cache First" para funcionamiento offline.
  - El Service Worker se registra automáticamente desde `app.js`.

### 5. Pruebas y Despliegue
- La aplicación puede ser desplegada en cualquier servicio que soporte HTTPS (GitHub Pages, Netlify, Vercel, etc.).
- Se recomienda probar la instalación y el funcionamiento offline desde el navegador (menú de instalación y modo sin conexión).

---

## ¿Cómo usar la app?
1. Clona o descarga este repositorio.
2. Abre `index.html` en tu navegador o despliega la carpeta en un hosting estático.
3. Agrega recetas usando el formulario.
4. Instala la app desde el navegador si lo deseas.
5. ¡Tus recetas estarán disponibles incluso sin conexión!

---

## Créditos
Desarrollado por [Tu Nombre].
