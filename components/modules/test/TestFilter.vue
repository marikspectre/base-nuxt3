<script setup lang="ts">
import { IconActivity } from '#components';

</script>

<template>
  <div class="flex justify-between items-center gap-4">
    <Input placeholder="search" :icon="IconActivity" class="max-w-[240px]" />

    <div class="flex items-center gap-4">
      <Select :options="[]" class="!w-[240px]" :icon="IconActivity" placeholder="Select an option" />
      <Select :options="[]" class="!w-[240px]" :icon="IconActivity" placeholder="Select an option" />
    </div>
  </div>
</template>