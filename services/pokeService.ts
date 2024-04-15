import type { Pokemon } from '~/types/api/pokemon';

class PokeService {
  baseUrl: string = '';

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getPokemon(search: string | number): Promise<Pokemon> {
    return await $fetch(`${this.baseUrl}pokemon/${search}`, { method: 'GET' });
  }
}

export default PokeService;
