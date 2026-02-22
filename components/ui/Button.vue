<template>
  <button :type="type"
    class="flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:opacity-80 active:opacity-90"
    :class="[color, variant]">
    <component :is="icon" class="w-5 h-5" />

    <span class="font-bold text-sm w-max" v-if="title">
      {{ title }}
    </span>
  </button>
</template>

<script setup lang="ts">
type Props = {
  title?: string;
  icon?: object;
  type?: "button" | "submit" | "reset";
  color?: "primary" | "success" | "info";
  variant?: "solid" | "outlined";
};

withDefaults(defineProps<Props>(), {
  type: "button",
  variant: "solid",
  color: "primary"
});
</script>

<style lang="css" scoped>
button.primary.outlined {
  @apply border border-primary-200 text-primary-200;
}

button.success.solid {
  @apply bg-success-100 text-white;
}

button.info.solid {
  @apply bg-info-100 text-white;
}
</style>
