const CACHE_NAME = 'recetas-pwa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/public/manifest.json',
  '/public/icon-192.png',
  '/public/icon-512.png',
  '/src/app.js',
  // Agrega aquí el archivo principal de la librería de Web Components
  '/components/tu-libreria.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
