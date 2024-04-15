<script setup lang="ts">
import { Loader } from '~/components/ui/molecules';

useHead({
  title: 'Nuxt pokedex',
  meta: [
    {
      name: 'description',
      content: '',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { 'http-equiv': 'x-ua-compatible', 'content': 'ie=edge' },
    // { 'http-equiv': 'Content-Security-Policy', content: `script-src 'none'` },
  ],
  htmlAttrs: {
    lang: 'en',
  },
});
</script>

<template>
  <NuxtPage />
  <Loader />
</template>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>
