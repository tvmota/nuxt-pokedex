<script setup lang="ts">
defineProps<{ type: string; percent: number }>();
</script>

<template>
  <div class="progress" :class="[`${type}--translucid`]">
    <div class="progress__bar" :class="[`${type}`]" :style="`width: ${percent}%`" />
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/utils/variables';
@import '~/assets/scss/utils/functions';

.progress {
  border-radius: pxToRem(4);
  width: 100%;
  background-color: rgba(167, 183, 35, 0.3);
  height: pxToRem(6);

  &__bar {
    width: 50%;
    border-radius: pxToRem(4);
    background-color: $pokemon-type-bug;
    height: pxToRem(6);
  }
}

.normal {
  background-color: $pokemon-type-normal;
  &--translucid {
    background-color: rgba(170, 166, 127, 0.3);
  }
}

.fire {
  background-color: $pokemon-type-fire;
  &--translucid {
    background-color: rgba(245, 125, 49, 0.3);
  }
}

.fighting {
  background-color: $pokemon-type-fighting;
  &--translucid {
    background-color: rgba(193, 34, 57, 0.3);
  }
}

.water {
  background-color: $pokemon-type-water;
  &--translucid {
    background-color: rgba(100, 147, 235, 0.3);
  }
}

.flying {
  background-color: $pokemon-type-flying;
  &--translucid {
    background-color: rgba(168, 145, 236, 0.3);
  }
}

.grass {
  background-color: $pokemon-type-grass;
  &--translucid {
    background-color: rgba(116, 203, 72, 0.3);
  }
}

.poison {
  background-color: $pokemon-type-poison;
  &--translucid {
    background-color: rgba(164, 62, 158, 0.3);
  }
}

.electric {
  background-color: $pokemon-type-eletric;
  &--translucid {
    background-color: rgba(249, 207, 48, 0.3);
  }
}

.ground {
  background-color: $pokemon-type-ground;
  &--translucid {
    background-color: rgba(222, 193, 107, 0.3);
  }
}

.psychic {
  background-color: $pokemon-type-psychic;
  &--translucid {
    background-color: rgba(251, 85, 132, 0.3);
  }
}

.rock {
  background-color: $pokemon-type-rock;
  &--translucid {
    background-color: rgba(182, 158, 49, 0.3);
  }
}

.ice {
  background-color: $pokemon-type-ice;
  &--translucid {
    background-color: rgba(154, 214, 223, 0.3);
  }
}

.bug {
  background-color: $pokemon-type-bug;
  &--translucid {
    background-color: rgba(167, 183, 35, 0.3);
  }
}

.dragon {
  background-color: $pokemon-type-dragon;
  &--translucid {
    background-color: rgba(112, 55, 255, 0.3);
  }
}

.ghost {
  background-color: $pokemon-type-ghost;
  &--translucid {
    background-color: rgba(112, 85, 155, 0.3);
  }
}

.dark {
  background-color: $pokemon-type-dark;
  &--translucid {
    background-color: rgba(117, 87, 76, 0.3);
  }
}

.steel {
  background-color: $pokemon-type-steel;
  &--translucid {
    background-color: rgba(183, 185, 208, 0.3);
  }
}

.fairy {
  background-color: $pokemon-type-fairy;
  &--translucid {
    background-color:rgba(230, 158, 172, 0.3);
  }
}
</style>
