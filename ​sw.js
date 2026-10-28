self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activated');
});

self.addEventListener('fetch', (e) => {
  // Simple fetch handler
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
