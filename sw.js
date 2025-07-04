// const CACHE_NAME = 'sd-fight-network-v1';
// const urlsToCache = [
//   '/',
//   '/index.html',
//   '/manifest.json',
//   '/emblem.png'
// ];

// // Install event - cache resources
// self.addEventListener('install', (event) => {
//   console.log('Service Worker: Installing...');
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then((cache) => {
//         console.log('Service Worker: Opened cache');
//         // Cache files individually to handle failures gracefully
//         const cachePromises = urlsToCache.map(url => {
//           return cache.add(url).catch(error => {
//             console.warn('Service Worker: Failed to cache:', url, error);
//             return null;
//           });
//         });
        
//         return Promise.allSettled(cachePromises);
//       })
//       .then(() => {
//         console.log('Service Worker: Installation completed');
//         // Force the waiting service worker to become the active service worker
//         return self.skipWaiting();
//       })
//       .catch(error => {
//         console.error('Service Worker: Installation failed:', error);
//       })
//   );
// });

// // Fetch event - serve from cache if available
// self.addEventListener('fetch', (event) => {
//   // Skip non-GET requests
//   if (event.request.method !== 'GET') {
//     return;
//   }

//   // Skip chrome-extension and other non-http requests
//   if (!event.request.url.startsWith('http')) {
//     return;
//   }

//   // Skip requests to external domains (unless it's your own domain)
//   const url = new URL(event.request.url);
//   if (url.origin !== location.origin && !url.origin.includes('sdfighter.com')) {
//     return;
//   }

//   event.respondWith(
//     caches.match(event.request)
//       .then((response) => {
//         // Return cached version if available
//         if (response) {
//           console.log('Service Worker: Serving from cache:', event.request.url);
//           return response;
//         }
        
//         // Otherwise, fetch from network
//         console.log('Service Worker: Fetching from network:', event.request.url);
//         return fetch(event.request)
//           .then(response => {
//             // Check if we received a valid response
//             if (!response || response.status !== 200 || response.type !== 'basic') {
//               return response;
//             }

//             // Clone the response
//             const responseToCache = response.clone();

//             // Cache the fetched resource
//             caches.open(CACHE_NAME)
//               .then(cache => {
//                 cache.put(event.request, responseToCache);
//               });

//             return response;
//           })
//           .catch(error => {
//             console.warn('Service Worker: Fetch failed:', event.request.url, error);
            
//             // Return a fallback response for navigation requests
//             if (event.request.destination === 'document') {
//               console.log('Service Worker: Returning fallback for navigation');
//               return caches.match('/index.html');
//             }
            
//             return null;
//           });
//       })
//   );
// });

// // Activate event - clean up old caches and claim clients
// self.addEventListener('activate', (event) => {
//   console.log('Service Worker: Activating...');
//   event.waitUntil(
//     Promise.all([
//       // Clean up old caches
//       caches.keys().then((cacheNames) => {
//         return Promise.all(
//           cacheNames.map((cacheName) => {
//             if (cacheName !== CACHE_NAME) {
//               console.log('Service Worker: Deleting old cache:', cacheName);
//               return caches.delete(cacheName);
//             }
//           })
//         );
//       }),
//       // Claim all clients
//       self.clients.claim()
//     ])
//     .then(() => {
//       console.log('Service Worker: Activation completed');
//     })
//     .catch(error => {
//       console.error('Service Worker: Activation failed:', error);
//     })
//   );
// }); 