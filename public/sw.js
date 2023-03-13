var CACHE_NAME = 'static-v1';

window.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
      ]);
    })
  )
});