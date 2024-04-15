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
      d="M6 18.538q-.213 0-.357-.143t-.143-.357t.143-.356t.357-.144h12q.213 0 .357.144t.143.356t-.143.357q-.144.143-.357.143zm1.85-4.411l3.56-9.373q.061-.14.174-.216t.258-.076h.354q.146 0 .259.085t.174.226l3.483 9.36q.073.232-.052.434t-.383.202q-.16 0-.272-.076t-.174-.235l-.923-2.527H9.665l-.934 2.532q-.062.14-.171.224t-.27.082q-.263 0-.391-.205t-.049-.437m2.135-3.065h3.992L12.069 5.78h-.1z"
    />
  </svg>
</template>
