// sw.js
const CACHE_NAME = 'static-cache-v1';
const ASSETS = [
  '/hughrwebster-maker/',
  '/hughrwebster-maker/index.html',
  '/hughrwebster-maker/style.css',
  '/hughrwebster-maker/icon-192.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
