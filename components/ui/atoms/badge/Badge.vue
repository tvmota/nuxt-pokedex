<script setup lang="ts">
defineProps<{ type: string }>();
</script>

<template>
  <span class="badge" :class="[`${type}`]"> <slot /></span>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/utils/variables';
@import '~/assets/scss/utils/functions';
@import '~/assets/scss/base/typography';

.badge {
  @extend .txt--base;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  color: $white;
  border-radius: pxToRem(12);
  padding: pxToRem(4) pxToRem(8);
}

.normal {
  background-color: $pokemon-type-normal;
}

.fire {
  background-color: $pokemon-type-fire;
}

.fighting {
  background-color: $pokemon-type-fighting;
}

.water {
  background-color: $pokemon-type-water;
}

.flying {
  background-color: $pokemon-type-flying;
}

.grass {
  background-color: $pokemon-type-grass;
}

.poison {
  background-color: $pokemon-type-poison;
}

.electric {
  background-color: $pokemon-type-eletric;
}

.ground {
  background-color: $pokemon-type-ground;
}

.psychic {
  background-color: $pokemon-type-psychic;
}

.rock {
  background-color: $pokemon-type-rock;
}

.ice {
  background-color: $pokemon-type-ice;
}

.bug {
  background-color: $pokemon-type-bug;
}

.dragon {
  background-color: $pokemon-type-dragon;
}

.ghost {
  background-color: $pokemon-type-ghost;
}

.dark {
  background-color: $pokemon-type-dark;
}

.steel {
  background-color: $pokemon-type-steel;
}

.fairy {
  background-color: $pokemon-type-fairy;
}
</style>
