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
      d="M4.5 17q-.213 0-.356-.144Q4 16.712 4 16.5t.144-.356T4.5 16h3.75q.213 0 .356.144t.144.357t-.144.356T8.25 17zm0-4.5q-.213 0-.356-.144Q4 12.212 4 12t.144-.356t.356-.143h9.365q.213 0 .357.144q.143.144.143.357t-.143.356t-.357.143zm0-4.5q-.213 0-.356-.144T4 7.499t.144-.356T4.5 7h15q.213 0 .356.144q.144.144.144.357q0 .212-.144.356T19.5 8z"
    />
  </svg>
</template>
