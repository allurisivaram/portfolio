import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    assets:"/<rootDir>/assets"
  },
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  ssr: true,
  components: {
    global: true,
    dirs: ['~/components']
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
