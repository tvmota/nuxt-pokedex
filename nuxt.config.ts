// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/google-fonts', '@pinia/nuxt', '@nuxt/image'],
  runtimeConfig: {
    public: {
      baseApi: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  googleFonts: {
    families: {
      Poppins: [200, 400, 700],
    },
  },
  i18n: {
    vueI18n: './i18n/i18n.config.ts',
  },
});
