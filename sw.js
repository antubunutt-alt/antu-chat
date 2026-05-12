const CACHE_NAME = 'antu-terminal-v1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => e.respondWith(fetch(e.request).catch(() => new Response('OFFLINE'))));
