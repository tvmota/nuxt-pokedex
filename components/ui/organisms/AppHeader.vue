<script setup lang="ts">
import { Pokeball } from '~/components/icons';
import { SearchInput } from '~/components/ui/molecules';
</script>

<template>
  <header class="app__header" role="banner">
    <section class="app__header__title">
      <Pokeball h="48" w="48" />
      <h2>{{ $t('pageTitle') }}</h2>
    </section>
    <section class="app__header__search">
      <SearchInput :placeholder="$t('searchFor')" />
    </section>
  </header>
</template>

<style lang="scss">
@import '~/assets/scss/utils/functions';
@import '~/assets/scss/utils/variables';

.app {
  &__header {
    color: $white;
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: pxToRem(8);
    padding: pxToRem(12) pxToRem(12) pxToRem(24) pxToRem(12);

    &__title {
      display: flex;
      align-items: center;
      gap: pxToRem(16);

      h2 {
        font-size: pxToRem(32);
        font-weight: 700;
      }
    }

    &__search {
      display: flex;
      align-items: center;
      gap: 16;
    }
  }
}
</style>
