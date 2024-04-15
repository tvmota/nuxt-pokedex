<script setup lang="ts">
const { visible } = useLoader();
</script>

<template>
  <section v-if="visible" class="loader">
    <div class="pokeball">
      <div class="pokeball-center" />
    </div>
  </section>
</template>

<style lang="scss">
@import '~/assets/scss/utils/functions';
@import '~/assets/scss/base/animations';

.loader {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 , 0, 0, .7);
  backdrop-filter: blur(1rem);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.pokeball {
  display: flex;
  justify-content: center;
  align-items: center;
  border: pxToRem(80) solid grey;
  border-bottom: pxToRem(70) solid #ff2d18;
  border-left: pxToRem(70) solid #ff2d18;
  border-right: pxToRem(70) solid white;
  border-top: pxToRem(70) solid white;
  animation: load 1s linear infinite;
  border-radius: 100%;
}

.pokeball-center {
  display: flex;
  border: pxToRem(5) solid grey;
  background-color:silver;
  box-shadow:0 0 pxToRem(10) black;
  border-radius: 50%;
  padding: pxToRem(22);
}
</style>
