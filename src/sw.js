const STATIC_CACHE_NAME = 's-cfp-app-v2';
const DYNAMIC_CACHE_NAME = 'd-cfp-app-v2';
const CACHE_URLS = [
    // '/static/index.html',
    // '/src/app.tsx',
    // '/static/offline.html',
    // '/src/pages/start-game/start-game.tsx',
    // '/src/layout/main/main.tsx',
    // '/src/pages/leaderboard/leaderboard.tsx'
    'index.html',
    'main.js',
    'leaderboard',
    'game',
    'signup',
    'login',
    'static/index.html',
    'src/app.tsx',
    'static/offline.html',
    'src/pages/start-game/start-game.tsx',
    'src/layout/main/main.tsx',
    'src/pages/leaderboard/leaderboard.tsx'
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
    console.log('fetch', event.request.url);
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
    console.log(cached, 'cached')
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