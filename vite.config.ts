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
    icons:[
      {
        src:'/android-chrome-192-192.png',
        sizes:'192x192',
        type:'image/png'
      },
      {
        src:'/android-chrome-512-512.png',
        sizes:'512x512',
        type:'image/png'
      },
      {
        src:'/apple-touch-icon.png',
        sizes:'180x180',
        type:'image/png',
        purpose:'apple-touch-icon'
      },
      {
        src:'/maskable_icon.png',
        sizes:'225x225',
        type:'image/png',
        purpose:'any maskable'
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
        return url.pathname.startsWith('/properties');
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
