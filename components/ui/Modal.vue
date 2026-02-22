<template>
  <el-dialog v-model="model" align-center :width="width" destroy-on-close>
    <slot></slot>
  </el-dialog>
</template>

<script setup lang="ts">
type Props = {
  width?: string | number;
};

withDefaults(defineProps<Props>(), {
  width: 584
});

const model = defineModel<boolean>();
</script>

<style lang="css">
:root {
  .el-dialog {
    --el-dialog-border-radius: 16px;
    --el-dialog-padding-primary: 8px;
    --el-text-color-primary: var(--primary-color);
    --el-dialog-title-font-size: 20px;
    --el-dialog-bg-color: var(--surface-50);
  }
}
</style>

<style lang="css">
.el-dialog {
  @apply flex flex-col gap-2 border border-surface-30;
}

.el-dialog__header {
  @apply p-2 min-h-[52px] flex items-center;
}

.el-dialog__title {
  @apply font-semibold;
}

.el-dialog__headerbtn {
  @apply top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-surface-40 border border-solid border-surface-30;
}

.el-dialog__headerbtn .el-dialog__close {
  @apply text-2xl text-primary-color;
}
</style>
