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
      d="m6.921 12.5l5.439 5.438q.146.147.153.345t-.16.363q-.165.16-.353.163t-.354-.163l-6.08-6.08q-.131-.131-.184-.268T5.329 12t.053-.298t.183-.267l6.081-6.081q.14-.14.341-.15t.367.15q.165.165.165.357t-.165.356L6.92 11.5H18.5q.213 0 .357.143T19 12t-.143.357q-.144.143-.357.143z"
    />
  </svg>
</template>
