import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["assets/fonts/fonts.scss", "vuetify/styles", "assets/scss/custom.scss"],
  modules: [
    "@pinia/nuxt",
    "@sidebase/nuxt-pdf",
    async (_, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: { configFile: "assets/scss/settings" },
          })
        );
      });
    },
  ],
  sourcemap: false,
  build: { transpile: ["vuetify"] },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    ssr: {
      noExternal: ["vuetify"],
    },
  },
});
