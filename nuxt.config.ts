// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/node_modules/bootstrap/dist/css/bootstrap.css'],
  script: [
      '~/node_modules/bootstrap/dist/js/bootstrap.js',
      '~/node_modules/bootstrap/js/dist/modal.js'
  ],
})
