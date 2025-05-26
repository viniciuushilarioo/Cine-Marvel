module.exports = {
  pwa: {
    name: 'ComicVerse',
    themeColor: '#ff0000',
    background_color: '#000000',
    display: 'standalone',
    start_url: '.',
    icons: [
      {
        src: './img/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: './img/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    manifestOptions: {
      short_name: 'ComicApp',
      description: 'Quadrinhos Marvel em alta qualidade!',
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  }
}