<template>
  <el-form-item v-bind="$props" :label="label" :prop="prop">
    <slot></slot>
  </el-form-item>
</template>

<script lang="ts" setup>
type Props = {
  label?: string;
  prop?: string;
};

defineProps<Props>();
</script>

<style lang="css">
.el-form-item {
  @apply grow mb-2;
}

.el-form-item__label {
  @apply text-primary-color;
}

.el-form-item--label-top .el-form-item__label {
  @apply mb-1;
}
</style>
