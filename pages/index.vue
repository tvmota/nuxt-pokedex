<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { Card } from '~/components/ui/molecules';
import { AppHeader } from '~/components/ui/organisms';
import { usePokemonStore } from '~/stores/pokemon';

const { setVisible, setInvisible } = useLoader();
const store = usePokemonStore();
const { list, loading } = storeToRefs(store);

async function loadList() {
  setVisible();

  try {
    await store.populateList();
  }
  finally {
    setInvisible();
  }
}

await loadList();
</script>

<template>
  <section v-if="!loading && list.length > 10" class="app__container">
    <AppHeader />
    <main class="app__main">
      <section class="app__main__cards">
        <NuxtLink v-for="pokemon in list" :key="pokemon.id" class="app--link" :to="`/detail/${pokemon.id}`">
          <Card>
            <template #header>
              #{{ pokemon.id }}
            </template>
            <template #body>
              <NuxtImg :alt="pokemon.name" :src="pokemon.sprites.front_default" width="150" height="150" />
            </template>
            <template #footer>
              {{ pokemon.name }}
            </template>
          </Card>
        </NuxtLink>
      </section>
    </main>
  </section>
</template>

<style lang="scss">
@import '~/assets/scss/utils/variables';
@import '~/assets/scss/utils/functions';

.app {
  &--link {
    text-decoration: none;
    color: unset;
  }

  &__container {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100%;
    width: 100%;
  }

  &__main {
    display: flex;
    background-color: $white;
    box-sizing: border-box;
    border-radius: pxToRem(8);
    padding: pxToRem(24) pxToRem(8);
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5) inset;
    justify-content: center;

    &__cards {
      display: grid;
      border-radius: pxToRem(8);
      gap: 0.5rem;
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@media screen and (max-width: $md) {
  .app__main__cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: $sm) {
  .app__main__cards {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: $xs) {
  .app__main__cards {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>~/stores/pokemon
