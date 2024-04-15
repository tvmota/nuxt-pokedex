import { defineStore } from 'pinia';
import type { Pokemon } from '~/types/api/pokemon';
import PokeService from '~/services/pokeService';

export const usePokemonStore = defineStore('pokemonList', () => {
  const config = useRuntimeConfig();
  const pokeService = new PokeService(config.public.baseApi);
  const list = ref<Pokemon[] | []>([]);
  const detail = ref<Pokemon | null>();
  const loading = ref(true);

  async function populateList() {
    const pkmnList: number[] = Array.from(new Set(
      Array.from({ length: 12 }, () => (Math.floor(Math.random() * 251) + 1)),
    ));
    const pkmnCalls: Promise<Pokemon>[] = [];

    try {
      for (const l of pkmnList) {
        const call = pokeService.getPokemon(l);
        pkmnCalls.push(call);
      }

      const { data } = await useAsyncData('list1', () => Promise.all(pkmnCalls));
      list.value = data.value || [];
    }
    finally {
      loading.value = false;
    }
  }

  async function loadPokemon(id: number) {
    loading.value = true;
    try {
      const { data } = await useAsyncData(() => pokeService.getPokemon(id));
      detail.value = data.value;
    }
    finally {
      loading.value = false;
    }
  }

  return { list, detail, loading, populateList, loadPokemon };
});
