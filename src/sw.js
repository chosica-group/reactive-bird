const STATIC_CACHE_NAME = 's-cfp-app-v10';
const DYNAMIC_CACHE_NAME = 'd-cfp-app-v10';
const CACHE_URLS = [
    '/',
    'index.html',
    'main.js',
    ];

self.addEventListener('install', async (event) => {
    console.log(event, 'install');
    const cache = await caches.open(STATIC_CACHE_NAME)
    await cache.addAll(CACHE_URLS)
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
    console.log('fetch111', event.request.url);
    const { request } = event;
    event.respondWith(cacheData(request));
});

async function cacheData(request) {
    const cashedRequest = await caches.match(request);
    if (CACHE_URLS.some(sa => request.url.indexOf(sa) >= 0) || request.headers.get('accept').includes('text/html')) {
      return networkFirst(request) || cashedRequest || await caches.match('/offline.html');
    }
    return networkFirst(request) || cashedRequest;
}

async function networkFirst(request) {
    const cache = await caches.open(DYNAMIC_CACHE_NAME);
    console.log(cache, 'networkFirst')
    try {
        const response = await fetch(request)
        await cache.put(request, response.clone());
        return response;
    } catch (e) {
        const cached = await cache.match(request);
        return cached ?? await caches.match('/offline.html');
    }
}