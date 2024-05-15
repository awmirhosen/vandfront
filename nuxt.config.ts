// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    "@pinia/nuxt",
    '@formkit/nuxt',
    'nuxt-paypal',
  ],

  paypal: {
    clientId: 'AXlo3BonIU04buXObrK_QVdWZ18lU_9l5K4fO3aza7tgQkGlxaPaf8uNihU0DSVRDC2uqv9CuVjcNKFx',
  },

})
