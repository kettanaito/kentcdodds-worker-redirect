self.addEventListener('install', function () {
  self.skipWaiting()
})

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
  const { request } = event

  // We are only interested in navigation requests.
  if (request.mode === 'navigate' && request.destination === 'document') {
    const url = new URL(request.url)

    // Having a predicate is a good idea so we don't end up
    // redirecting from everywhere on the site.
    if (url.pathname === '/nested') {
      const destination = new URL(
        url.pathname + url.search,
        'http://localhost:8080'
      )

      return event.respondWith(
        new Response(null, {
          status: 301,
          headers: {
            // Construct a regular redirect response.
            Location: destination,
          },
        })
      )
    }
  }
})
