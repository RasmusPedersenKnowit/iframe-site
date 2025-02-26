// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-security'],
  security: {
    headers: {
        contentSecurityPolicy: {
            'frame-src': ['*'],
            'frame-ancestors': ['*'],
            'script-src': ['*']
        },
        crossOriginResourcePolicy: 'cross-origin',
    }
  }
})
