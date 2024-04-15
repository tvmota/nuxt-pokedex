<template>
  <section class="card">
    <div class="card__header">
      <slot name="header" />
    </div>
    <div class="card__body">
      <slot name="body" />
    </div>
    <div class="card__footer">
      <slot name="footer" />
    </div>
  </section>
</template>

<style lang="scss">
@import '~/assets/scss/utils/functions';
@import '~/assets/scss/base/typography';
@import '~/assets/scss/utils/variables';

.card {
  display: flex;
  background: linear-gradient(180deg, $white 60%, $bckg 40%);
  flex-direction: column;
  padding: pxToRem(8) pxToRem(4);
  border: 1px solid #cacaca;
  border-radius: pxToRem(8);
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.5);
  justify-content: space-between;
  min-width: pxToRem(180);
  min-height: pxToRem(180);

  &__header {
    @extend .txt--base;
    color: $medium;
    display: flex;
    justify-content: flex-end;
  }

  &__body {
    display: flex;
    justify-content: center;
  }

  &__footer {
    @extend .txt--lg;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    text-decoration: none !important;
  }
}
</style>
