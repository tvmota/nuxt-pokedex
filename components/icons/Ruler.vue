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
      d="M4.615 17q-.69 0-1.152-.462T3 15.385v-6.77q0-.69.463-1.152T4.615 7h14.77q.69 0 1.152.463T21 8.615v6.77q0 .69-.462 1.153T19.385 17zm0-1h14.77q.23 0 .423-.192t.192-.423v-6.77q0-.23-.192-.423T19.385 8H16.5v3.23h-1V8h-3v3.23h-1V8h-3v3.23h-1V8H4.615q-.23 0-.423.192T4 8.615v6.77q0 .23.192.423t.423.192M7.5 11.23h1zm4 0h1zm4 0h1zM12 12"
    />
  </svg>
</template>
