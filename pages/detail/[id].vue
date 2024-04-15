<script setup lang="ts">
import { ArrowBack, Ruler, Weight } from '~/components/icons';
import { Badge, ProgressBar } from '~/components/ui/atoms';
import PokeService from '~/services/pokeService';
import type { Pokemon } from '~/types/api/pokemon';

interface BaseStats {
  'hp': string;
  'attack': string;
  'defense': string;
  'special-attack': string;
  'special-defense': string;
  'speed': string;
};

const route = useRoute();
const { id = 1 } = route.params;
const config = useRuntimeConfig();
const pokeService = new PokeService(config.public.baseApi);
const { visible, setVisible, setInvisible } = useLoader();
const detail = ref<Pokemon | null>();

const fmtHeight = computed(() => {
  const { height = 0 } = detail.value || {};

  return `${(height * 0.10).toFixed(1)}m`;
});

const fmtWeight = computed(() => {
  const { weight = 0 } = detail.value || {};

  return `${(weight * 0.10).toFixed(1)} kg`;
});

function findStat(stat: string) {
  const dictStats: BaseStats = {
    'hp': 'HP',
    'attack': 'ATK',
    'defense': 'DEF',
    'special-attack': 'SATK',
    'special-defense': 'SDEF',
    'speed': 'SPD',
  };

  const entries = Object.entries(dictStats);
  const results = entries.find(([e]) => e.toLocaleLowerCase() === stat.toLocaleLowerCase());
  return results ? results[1] : '';
}

async function load() {
  setVisible();

  try {
    const { data } = await useAsyncData(() => pokeService.getPokemon(id));
    detail.value = data.value;
  }
  finally {
    setInvisible();
  }
}

await load();
</script>

<template>
  <section v-if="!visible && detail" class="detail__container">
    <section class="detail__info" :class="[`type-bckg--${detail.types[0].type.name}`]">
      <section class="detail__info__header">
        <NuxtLink to="/">
          <ArrowBack w="32" h="32" />
        </NuxtLink>

        <h3 class="detail__info__header--title">
          {{ detail.name }}
        </h3>

        <span class="detail__info__header--txt">#{{ detail.id }}</span>
      </section>
      <section class="detail__info__body">
        <section class="detail__info__body__img-wrapper">
          <NuxtImg :alt="detail.name" :src="detail.sprites.front_default" />
        </section>

        <section class="detail__info__body__types">
          <Badge v-for="t in detail.types" :key="t.slot" :type="t.type.name">
            {{ t.type.name }}
          </Badge>
        </section>

        <h3 class="detail__info__body--about-sub" :class="[`type--${detail.types[0].type.name}`]">
          {{ $t('about') }}
        </h3>

        <section class="detail__info__body__characters">
          <div>
            <div class="detail__info__body__characters__title">
              <Weight h="26" w="26" />
              <p>{{ fmtWeight }}</p>
            </div>
            <div class="detail__info__body__characters__subTitle">
              {{ $t('weight') }}
            </div>
          </div>
          <div>
            <div class="detail__info__body__characters__title">
              <Ruler class="rotate__icon" h="26" w="26" />
              <p>{{ fmtHeight }}</p>
            </div>
            <div class="detail__info__body__characters__subTitle">
              {{ $t('height') }}
            </div>
          </div>
          <div>
            <div class="detail__info__body__characters__title detail__info__body__characters__title-moves">
              <p>{{ detail.moves[0].move.name }}</p><br>
              <p>{{ detail.moves[1].move.name }}</p>
            </div>
            <div class="detail__info__body__characters__subTitle">
              {{ $t('moves') }}
            </div>
          </div>
        </section>

        <section class="detail__info__body__stats">
          <p class="detail__info__body--about-sub" :class="[`type--${detail.types[0].type.name}`]">
            {{ $t('baseStats') }}
          </p>

          <div>
            <ul>
              <li v-for="st in detail.stats" :key="st.stat.url" class="detail__info__body__stats__item">
                <div class="detail__info__body--about-sub" :class="[`type--${detail.types[0].type.name}`]">
                  {{ findStat(st.stat.name) }}
                </div>
                <div class="detail__info__body__stats__item__progress">
                  {{ st.base_stat }}
                  <ProgressBar :type="detail.types[0].type.name" :percent="100 * st.base_stat/255" />
                </div>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>

<style lang="scss">
@import '~/assets/scss/utils/functions';
@import '~/assets/scss/utils/variables';
@import '~/assets/scss/base/typography';

.rotate__icon {
  transform: rotate(90deg);
}

.detail {
  &__container {
    display: flex;
    margin: auto;
  }

  &__info {
    border: 2px solid $light;
    border-radius: pxToRem(8);
    min-width: pxToRem(400);
    min-height: pxToRem(600);
    position: relative;
    padding: pxToRem(4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;

    &__header {
      display: flex;
      color: $white;

      padding: pxToRem(20);
      align-items: center;
      justify-content: space-between;

      a {
        color: $white;
      }

      &--title {
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: capitalize;
      }

      &--txt {
        font-size: 1rem;
        font-weight: 700;
      }
    }

    &__body {
      height: calc(100% - 190px);
      border-radius: pxToRem(8);
      background-color: $light;
      position: relative;
      width: 100%;
      padding: pxToRem(62) pxToRem(20) pxToRem(20) pxToRem(20);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      box-sizing: border-box;

      &__img-wrapper {
        width: 200px;
        height: 200px;
        position: absolute;
        top: -120px;
        left: 0;
        right: 0;
        margin: auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &__types {
        display: flex;
        gap: 1rem;
        justify-content: center;
      }

      &--about-sub {
        @extend .txt--lg;
        font-weight: 700;
        text-align: center;
        text-transform: capitalize;
      }

      &__characters {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        &__title {
          @extend .txt--base;
          color: $dark;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.5rem 0;
        }

        &__title-moves {
          flex-direction: column;
          gap: pxToRem(4);
        }

        &__subTitle {
          @extend .txt--sm;
          color: $medium;
          text-align: center;
        }

        > div {
          &:not(:last-child) {
            border-right: 1px solid $medium;
          }
        }
      }

      &__stats {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        &__item {
          display: grid;
          grid-template-columns: 15% 1fr;
          gap: .5rem;
          grid-template-rows: 1fr;

          &__progress {
            display: grid;
            align-items: center;
            gap: .5rem;
            grid-template-columns: 10% 1fr;
          }

          &:not(:last-child) {
            margin-bottom: 0.5rem;
          }
        }
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      display: block;
      background-image: url('/img/pokeball.png');
      background-position: top right;
      background-repeat: no-repeat;
      background-size: 180px;
      width: 180px;
      height: 180px;
      opacity: 0.1;
    }
  }
}

.type {
  &--normal {
    color: $pokemon-type-normal;
  }

  &--fire {
    color: $pokemon-type-fire;
  }

  &--fighting {
    color: $pokemon-type-fighting;
  }

  &--water {
    color: $pokemon-type-water;
  }

  &--flying {
    color: $pokemon-type-flying;
  }

  &--grass {
    color: $pokemon-type-grass;
  }

  &--poison {
    color: $pokemon-type-poison;
  }

  &--electric {
    color: $pokemon-type-eletric;
  }

  &--ground {
    color: $pokemon-type-ground;
  }

  &--psychic {
    color: $pokemon-type-psychic;
  }

  &--rock {
    color: $pokemon-type-rock;
  }

  &--ice {
    color: $pokemon-type-ice;
  }

  &--bug {
    color: $pokemon-type-bug;
  }

  &--dragon {
    color: $pokemon-type-dragon;
  }

  &--ghost {
    color: $pokemon-type-ghost;
  }

  &--dark {
    color: $pokemon-type-dark;
  }

  &--steel {
    color: $pokemon-type-steel;
  }

  &--fairy {
    color: $pokemon-type-fairy;
  }
}

.type-bckg {
  &--normal {
    background-color: $pokemon-type-normal;
  }

  &--fire {
    background-color: $pokemon-type-fire;
  }

  &--fighting {
    background-color: $pokemon-type-fighting;
  }

  &--water {
    background-color: $pokemon-type-water;
  }

  &--flying {
    background-color: $pokemon-type-flying;
  }

  &--grass {
    background-color: $pokemon-type-grass;
  }

  &--poison {
    background-color: $pokemon-type-poison;
  }

  &--electric {
    background-color: $pokemon-type-eletric;
  }

  &--ground {
    background-color: $pokemon-type-ground;
  }

  &--psychic {
    background-color: $pokemon-type-psychic;
  }

  &--rock {
    background-color: $pokemon-type-rock;
  }

  &--ice {
    background-color: $pokemon-type-ice;
  }

  &--bug {
    background-color: $pokemon-type-bug;
  }

  &--dragon {
    background-color: $pokemon-type-dragon;
  }

  &--ghost {
    background-color: $pokemon-type-ghost;
  }

  &--dark {
    background-color: $pokemon-type-dark;
  }

  &--steel {
    background-color: $pokemon-type-steel;
  }

  &--fairy {
    background-color: $pokemon-type-fairy;
  }
}

@media screen and (max-width: $sm) {
  .detail__info {
    min-width: 100%
  }
}
</style>
