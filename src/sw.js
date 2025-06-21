// Service Worker for offline support and cache fallback
const CACHE_NAME = 'foriran98-static-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/main-style.css',
  '/src/font-face.css',
  '/src/tailwind.min.css',
  '/src/tailwindcss.js',
  '/file/icon.png',
  '/json/content.json',
  '/json/news.json',
  '/json/businesses.json',
  // add more static files if needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (event.request.url.startsWith(self.location.origin)) {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
