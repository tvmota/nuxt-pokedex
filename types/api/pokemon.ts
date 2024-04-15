import type { Abilities } from './abilities';
import type { Cries } from './cries';
import type { Form } from './form';
import type { GameIndex } from './gameIndex';
import type { Moves } from './moves';
import type { Species } from './species';
import type { Sprites } from './sprites';
import type { Stats } from './stats';
import type { Types } from './types';

export interface Pokemon {
  abilities: Abilities[];
  base_experience: number;
  cries: Cries;
  forms: Form[];
  game_indices: GameIndex[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number;
  past_abilities: Abilities[];
  past_types: Types[];
  species: Species;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
  weight: number;
}
