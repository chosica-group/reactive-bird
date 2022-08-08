const STATIC_CACHE_NAME = 's-cfp-app-v5';
const DYNAMIC_CACHE_NAME = 'd-cfp-app-v5';
const CACHE_URLS = [
    '/index.html',
    '/game',
    '/leaderboard',
    '/login',
    '/signup',
    '/forum',
    '/profile',
    '/welcome',
    '/'
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
self.addEventListener('fetch', event => {
    console.log('fetch1', event.request.url);
    const {request} = event;
    const url = new URL(request.url)
    url.origin === location.origin ?
        event.respondWith(cacheFirst(request))
        : event.respondWith(networkFirst(request))
})

async function cacheFirst(request) {
    const cashed = await caches.match(request);
    return cashed ?? fetch(request);
};

async function networkFirst(request) {
    const cache = await caches.open(DYNAMIC_CACHE_NAME);
    try {
        const response = await fetch(request);
        await cache.put(request, response.clone()).catch(() => {
        });
        return response;
    } catch (e) {
        const cached = await cache.match(request)
        if (cached) {
            return cached
        }
        throw e;
    }
};