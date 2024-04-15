<script setup lang="ts">
import type { Props } from '~/types/components/icon';

withDefaults(defineProps<Props>(), {
  h: '16px',
  w: '16px',
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="w"
    :height="h"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M13.292 12L9.046 7.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16l4.388 4.389q.131.13.184.267q.053.136.053.298t-.053.298t-.184.267l-4.388 4.389q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354z"
    />
  </svg>
</template>
