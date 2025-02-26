// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  sourcemap: true,
  //modules: ['nuxt-security'],
    ssr: true,
  /*security: {
    headers: {
        contentSecurityPolicy: {
            'frame-src': ['*'],
            'frame-ancestors': ['*'],
        },
        crossOriginResourcePolicy: 'cross-origin',
    }
  }*/
})
