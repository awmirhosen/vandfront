import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["assets/fonts/fonts.scss", "vuetify/styles"],
  modules: ["@pinia/nuxt", "@sidebase/nuxt-pdf"],
  sourcemap: false,
  build: { transpile: ["vuetify"] },
});
