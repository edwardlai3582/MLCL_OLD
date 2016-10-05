var staticCacheName = 'mlcl-static-v2';
var contentImgsCache = 'mlcl-content-imgs';
var allCaches = [
  staticCacheName,
  contentImgsCache    
];

self.addEventListener('install', function(event) {
    var urlsToCache = [
        '/',
        '/favicon.ico',
        '/apple-icon.png',
        '/android-icon-192x192.png',
        '/static/css/main.42f794ee.css',
        '/static/js/main.cceb2986.js',
        '/static/media/Iron-Fist-Comics.ec2ace38.jpg',
        '/static/media/BEBAS___.3ef73ff4.ttf',
        '/static/media/BadaboomBB_Reg.79f12f40.ttf'
    ];
    
    //skipWainting
    if (self.skipWaiting) { self.skipWaiting(); }
    
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache){
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    //return cacheName.startsWith('eazyDig') && cacheName != staticCacheName;
                    return cacheName.startsWith('mlcl') && !allCaches.includes(cacheName);
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(
    // caches.match() will look for a cache entry in all of the caches available to the service worker.
    // It's an alternative to first opening a specific named cache and then matching on that.
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found response in cache:', response);

        return response;
      }

      console.log('No response found in cache. About to fetch from network...');

      // event.request will always have the proper mode set ('cors, 'no-cors', etc.) so we don't
      // have to hardcode 'no-cors' like we do when fetch()ing in the install handler.
      return fetch(event.request).then(function(response) {
        console.log('Response from network is:', response);

        return response;
      }).catch(function(error) {
        // This catch() will handle exceptions thrown from the fetch() operation.
        // Note that a HTTP error response (e.g. 404) will NOT trigger an exception.
        // It will return a normal response object that has the appropriate error code set.
        console.error('Fetching failed:', error);

        throw error;
      });
    })
  );
});
