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
      d="m9.096 15.077l-.921 3.66q-.037.17-.152.255t-.292.085q-.225 0-.371-.183t-.08-.402l.855-3.415H5.16q-.25 0-.406-.186t-.089-.43q.056-.176.187-.28t.308-.104h3.225l1.038-4.154H6.448q-.25 0-.406-.185t-.088-.43q.056-.177.186-.281t.308-.104h3.225l.921-3.66q.037-.17.152-.255t.292-.085q.225 0 .372.183t.078.402l-.853 3.415h4.269l.921-3.66q.037-.17.152-.255t.292-.085q.225 0 .371.183t.08.402l-.855 3.415h2.975q.25 0 .406.186t.089.43q-.056.176-.187.28t-.308.104h-3.225l-1.038 4.154h2.975q.25 0 .406.186t.088.43q-.056.176-.186.28t-.308.104h-3.225l-.921 3.66q-.037.17-.152.255t-.292.085q-.225 0-.372-.183t-.078-.402l.853-3.415zm.25-1h4.27l1.038-4.154h-4.27z"
    />
  </svg>
</template>
