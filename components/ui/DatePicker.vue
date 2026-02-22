<template>
  <el-date-picker v-model="model" :prefix-icon="icon" :placeholder="placeholder" value-format="DD-MM-YYYY"
    format="DD-MM-YYYY" clearable>
  </el-date-picker>
</template>

<script setup lang="ts">
type Props = {
  placeholder: string;
  icon: object;
};

defineProps<Props>();

const model = defineModel<string>();
</script>

<style lang="css">
:root {
  .el-input {
    --el-text-color-regular: var(--primary-500);
    --el-border-color-hover: var(--surface-30);
  }
}
</style>

<style lang="css">
.el-input {
  @apply grow;
}

.el-input__wrapper {
  @apply h-10 gap-2 p-2 rounded-lg shadow-none bg-surface-50 border border-surface-20;
}

.el-input__icon {
  @apply w-auto gap-2 text-xl;
}

.el-input__prefix-inner> :last-child {
  @apply mr-0;
}

.el-input__inner {
  @apply placeholder:text-primary-500;
}
</style>
