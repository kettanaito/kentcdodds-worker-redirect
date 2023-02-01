if ('serviceWorker' in navigator) {
  async function init() {
    await navigator.serviceWorker.register('./worker.js')
    await navigator.serviceWorker.ready
    console.log('Service Worker is ready!')
  }

  init()
}
