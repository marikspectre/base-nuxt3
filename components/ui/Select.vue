<template>
  <el-select v-model="model" :placeholder="placeholder" clearable>
    <template #prefix>
      <PrefixIcon :icon="icon" />
    </template>

    <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value" />
  </el-select>
</template>

<script setup lang="ts">
type SelectOption = {
  label: string;
  value: string;
};

type Props = {
  options: SelectOption[];
  placeholder: string;
  icon: object;
};

defineProps<Props>();

const model = defineModel<string | number>();
</script>

<style lang="css">
:root {
  .el-select {
    --el-text-color-regular: var(--primary-500);
    --el-text-color-placeholder: var(--primary-500);
    --el-border-color-hover: var(--surface-30);
  }
}
</style>

<style lang="css">
.el-select__wrapper {
  @apply h-10 gap-2 p-2 rounded-lg shadow-none bg-surface-50 border border-surface-20;
}

.el-select__prefix {
  @apply gap-2;
}
</style>
