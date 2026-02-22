<template>
  <div class="min-h-[25px] inline-flex items-center py-1 px-2 rounded border" :class="[color]">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
type Props = {
  title?: string | number;
  color: "success" | "surface" | "info" | "danger";
};

defineProps<Props>();
</script>

<style lang="css" scoped>
div.success {
  @apply bg-success-100 border-success-50 text-white;
}

div.info {
  @apply bg-info-100 border-info-50 text-white;
}

div.surface {
  @apply bg-surface-30 border-surface-30 text-primary-color;
}

div.danger {
  @apply bg-danger-50 border-danger-20 text-white;
}
</style>
