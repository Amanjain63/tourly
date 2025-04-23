
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
 'travel/index.html',
 'travel/styles.css',
 'travel/packageDetails.html',
 'travel/gallery.html',
 'travel/dubai.html',
 'travel/packages.html',
 'travel/contact.html',
 'travel/aboutus.html',
 'travel/favicon.svg',
 'travel/images/logo.svg',
];

self.addEventListener('install', event => {
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
  });
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)  
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;  
        }
        return fetch(event.request)  
          .then(networkResponse => {
            return caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, networkResponse.clone()); 
                return networkResponse;
              });
          });
      })
  );
});
self.addEventListener('activate', event => {
  console.log('Service Worker activation event triggered');

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});