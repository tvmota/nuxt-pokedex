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
      d="M6.712 19h10.576q.27 0 .462-.221t.154-.49l-1.252-8.77q-.039-.23-.212-.375T16.037 9H7.963q-.23 0-.403.144t-.212.375l-1.252 8.77q-.038.269.154.49t.462.221M12 8q.425 0 .713-.288T13 7t-.288-.712T12 6t-.712.288T11 7t.288.713T12 8m1.71 0h2.346q.615 0 1.06.394q.444.394.53 1.004l1.252 8.77q.106.726-.376 1.28T17.288 20H6.712q-.752 0-1.234-.553t-.376-1.28l1.252-8.769q.086-.61.53-1.004T7.945 8h2.346q-.132-.212-.211-.468T10 7q0-.846.577-1.423T12 5t1.423.577T14 7q0 .275-.079.532T13.71 8M6.038 19h11.924z"
    />
  </svg>
</template>
