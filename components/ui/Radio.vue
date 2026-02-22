<template>
  <el-radio-group v-model="model">
    <el-radio
      v-for="(item, index) in options"
      :key="index"
      :value="item.value"
      :border="true"
    >
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script setup lang="ts">
type RadioOption = {
  label: string;
  value: string;
};

type Props = {
  options: RadioOption[];
};

defineProps<Props>();

const model = defineModel<string>();
</script>

<style lang="css">
:root {
  .el-radio {
    --el-radio-input-height: 20px;
    --el-radio-input-width: 20px;
    --el-radio-input-border: 1px solid var(--primary-300);
    --el-radio-text-color: var(--primary-color);
    --el-radio-font-weight: 400;
  }
}
</style>

<style lang="css">
.el-radio-group {
  @apply grow gap-4;
}

.el-radio.is-bordered {
  @apply h-10 grow p-2 mr-0 rounded-lg border-surface-20 bg-surface-50;
}

.el-radio.is-bordered.is-checked {
  @apply bg-surface-50 border-surface-20;
}

.el-radio__inner {
  @apply bg-transparent;
}

.el-radio__inner:hover {
  @apply border-primary-color;
}

.el-radio__input.is-checked .el-radio__inner {
  @apply bg-transparent border-primary-color;
}

.el-radio__input.is-checked + .el-radio__label {
  @apply text-primary-color;
}

.el-radio__input.is-checked .el-radio__inner:after {
  @apply bg-primary-color;
}

.el-radio__inner:after {
  width: 14px;
  height: 14px;
}
</style>
