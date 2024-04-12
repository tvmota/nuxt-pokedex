// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Inter: [400, 700],
    },
  },
});
