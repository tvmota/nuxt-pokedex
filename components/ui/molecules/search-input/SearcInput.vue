<script setup lang="ts">
import type { Props } from '~/types/components/searchInput';
import type { Pokemon } from '~/types/api/pokemon';
import { Loading, Search } from '~/components/icons';
import PokeService from '~/services/pokeService';

withDefaults(defineProps<Props>(), {
  placeholder: '',
});

const loading = ref(false);
const result = ref<Pokemon | null>();
const showResult = ref(false);
const search = ref('');

async function handleSubmit() {
  const config = useRuntimeConfig();
  const pokeService = new PokeService(config.public.baseApi);

  try {
    if (search.value.length > 0 && search.value !== '0') {
      loading.value = true;
      const { data } = await useAsyncData('search', () => pokeService.getPokemon(search.value));
      result.value = data.value;
      showResult.value = true;
    }
    else {
      showResult.value = false;
    }
  }
  catch (err) {
    result.value = null;
    showResult.value = true;
  }
  finally {
    loading.value = false;
  }
}

onMounted(async () => {
  window.addEventListener('click', async (evt) => {
    const target: HTMLElement = evt.target as HTMLElement;
    const wrapper = document.getElementById('search__wrapper');
    const isChildren = wrapper?.contains(target);

    if (isChildren) {
      if (search.value && result.value)
        showResult.value = true;
    }
    else {
      showResult.value = false;
    }
  });
});
</script>

<template>
  <form id="search__wrapper" class="search__wrapper" novalidate @submit.prevent="handleSubmit">
    <section class="search__input">
      <Search v-if="!loading" class="search__input--icon" h="26" w="26" />
      <Loading v-else class="search__input--icon" h="26" w="26" />
      <input v-model="search" :placeholder="placeholder" type="search">
    </section>
    <section v-if="showResult" class="search__options">
      <div v-if="result">
        <NuxtLink :to="`/detail/${result.id}`" class="search__options__item">
          <NuxtImg :src="result.sprites.front_default" :alt="result.name" width="82" height="82" />
          <span>{{ result.name }}</span>
        </NuxtLink>
      </div>
      <div v-else class="search__options__item">
        <p>Sem resultados</p>
      </div>
    </section>
  </form>
</template>

<style lang="scss">
@import '~/assets/scss/utils/functions';
@import '~/assets/scss/utils/variables';

.search {
  &__wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-block;
  }

  &__input {
    position: relative;

    input[type="search"] {
      border: 0;
      border-radius: pxToRem(24);
      outline: none;
      font-size: 1rem;
      height: 42px;
      width: 100%;
      padding: pxToRem(8) pxToRem(16) pxToRem(8) pxToRem(42);
    }

    &--icon {
      position: absolute;
      top: calc(50% - 12px);
      left: pxToRem(12);
      color: $primary;
    }
  }

  &__options {
    color: #000;
    display: flex;
    position: absolute;
    border-radius: pxToRem(8);
    right: 0;
    left: 0;
    z-index: 10;
    margin-top: 0.25rem;
    flex-direction: column;
    padding: pxToRem(4);
    border-width: pxToRem(1);
    background-color: #ffffff;
    box-shadow: 0 pxToRem(16) pxToRem(15) pxToRem(-3) rgba(0, 0, 0, 0.1), 0 pxToRem(4) pxToRem(6) pxToRem(-2) rgba(0, 0, 0, 0.05);

    &__item {
      align-items: center;
      display: flex;
      gap: 0.5rem;
      text-decoration: none;
      text-transform: capitalize;
      color: $dark;

      &:hover {
        background-color: $red-100;
      }
    }
  }

}
</style>
