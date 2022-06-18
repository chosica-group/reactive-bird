const STATIC_CACHE_NAME = 's-cfp-app-v1';
const DYNAMIC_CACHE_NAME = 'd-cfp-app-v1';
const CACHE_URLS = [
    'static/index.html',
    'src/app.tsx',
    '/offline.html'
];

self.addEventListener('install', async (event) => {
    const cache = await caches.open(STATIC_CACHE_NAME)
    await cache.addAll(CACHE_URLS)
    console.log(event, 'install');
});
self.addEventListener('activate', async (event) => {
    console.log(event, 'activate');
    const cacheNames = await caches.keys();
    await Promise.all(
        cacheNames.filter(name => name !== STATIC_CACHE_NAME)
        .map(name => caches.delete(name))
    )
});
self.addEventListener('fetch', (event) => {
    console.log('fetch', event.request);
    const { request } = event;
    const url = new URL(request.url)
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(event.request));
    } else {
        event.respondWith(networkFirst(request));
    }
});

async function cacheFirst(request) {
    const cached = await caches.match(request);
    return cached ?? await fetch(request);
};

async function networkFirst(request) {
    const cache = await caches.open(DYNAMIC_CACHE_NAME);
    try {
        const response = await fetch(request)
        await cache.put(request, response.clone());
        return response;
    } catch (e) {
        const cached = await cache.match(request);
        return cached ?? await caches.match('/offline.html')
    }
}