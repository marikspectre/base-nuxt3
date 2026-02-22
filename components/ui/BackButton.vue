<script setup lang="ts">
import { IconArrowLeft } from '#components';

</script>

<template>
  <button @click="$router.back()" class="rounded-md border p-2 border-surface-30 bg-surface-40">
    <IconArrowLeft class="w-5 h-5 text-primary-color" />
  </button>
</template>