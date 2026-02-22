<template>
  <ElCheckbox v-model="model" @change="$emit('get')">
    {{ title }}
  </ElCheckbox>
</template>

<script setup lang="ts">
defineProps(
  {
    title: {
      type: String,
      default: ""
    }
  }
);

const model = defineModel<boolean>({
  default: false
});

defineEmits(["get"]);
</script>

<style scoped>
.el-checkbox {
  @apply !px-2 border border-surface-20 rounded-lg !w-full h-10 bg-surface-50
}

:deep(.el-checkbox__inner) {
  @apply w-6 h-6
}

:deep(.is-checked .el-checkbox__inner) {
  @apply !bg-info-50
}
</style>