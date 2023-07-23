import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.io', 'apple-touch-icon-png', 'masked-icon.svg'],
  manifest: {
    name:'niva-app',
    short_name:'niva-app',
    description: 'An app that helps you to find shared home in canada',
    "icons": [
      {
        "src": "https://nivaappstorage.blob.core.windows.net/icons/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png"
      },
      {
        "src": "https://nivaappstorage.blob.core.windows.net/icons/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      },
      {
        "src": "https://nivaappstorage.blob.core.windows.net/icons/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "https://nivaappstorage.blob.core.windows.net/icons/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      },
      {
        "src": "https://nivaappstorage.blob.core.windows.net/icons/icon-152x152.png",
        "sizes": "152x152",
        "type": "image/png"
      },
      {
        "src": "https://nivaappstorage.blob.core.windows.net/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "https://nivaappstorage.blob.core.windows.net/icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "https://nivaappstorage.blob.core.windows.net/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    theme_color: '#171717',
    background_color: '#e8ebf2',
    display: 'standalone',
    scope:'/',
    start_url:'/',
    orientation: 'portrait'
  },
  workbox: {
    runtimeCaching: [{
      urlPattern:({url}) => {
        return url.pathname.startsWith('/users')
      },
      handler:'CacheFirst' as const,
      options: {
        cacheName:'api-cache',
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    }]
 },
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA(manifestForPlugin)
  ],
})
