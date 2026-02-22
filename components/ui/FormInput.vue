<template>
  <el-input v-model="model" class="w-full" :placeholder="$t('auth.password')" />
</template>

<script setup lang="ts">

const model = defineModel<any>({
  default: {}
});
</script>

<style>
.el-input__wrapper,
.el-select__wrapper {
  @apply !py-1.5 !px-2 !flex h-10 !bg-surface-50 !gap-2
}

.el-input__prefix-inner {
  @apply !border-r border-surface-20 !flex !justify-center !items-center
}

/* .el-input__inner {
  @apply pl-2.5
} */

.el-input__icon {
  @apply !w-5 !h-5 !text-primary-color !mr-2
}

.el-icon svg {
  @apply w-5 h-5
}

.el-input__inner {
  @apply !grow !text-sm !bg-transparent !outline-none placeholder:text-primary-500
}

.el-form-item__label {
  @apply text-primary-color text-sm
}
</style>