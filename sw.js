const CACHE = 'ledger-v1';
const ASSETS = ['/'];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    // Network first — always get fresh data, fall back to cache if offline
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});
