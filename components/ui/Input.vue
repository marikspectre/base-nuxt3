<template>
  <div
    class="w-full h-10 bg-surface-50 flex items-center gap-2 p-2 rounded-lg border border-surface-20 focus-within:outline outline-1 outline-surface-30">
    <PrefixIcon :icon="icon" />

    <input id="search" v-model="model" class="grow text-sm bg-transparent outline-none placeholder:text-primary-500"
      :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
type Props = {
  placeholder: string;
  icon: object;
};

defineProps<Props>();

const model = defineModel<string>();
</script>