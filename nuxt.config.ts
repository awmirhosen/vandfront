import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["vuetify/styles", "assets/fonts/fonts.css"],
  modules: ["@pinia/nuxt"],
  sourcemap: false,
  build: { transpile: ["vuetify"] },
});
