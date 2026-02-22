<template>
  <el-pagination v-model:current-page="page" v-model:page-size="size" :total="total" :prev-text="$t('pagination.prev')"
    :next-text="$t('pagination.next')" layout="sizes, total, prev, pager, next"
    :page-sizes="pageSizes ?? [10, 20, 30, 40, 50, 100]" @size-change="$emit('get')"
    @current-change="$emit('get')"></el-pagination>
</template>

<script setup lang="ts">
type Props = {
  total: number;
  pageSizes?: number[];
};

defineProps<Props>();

const page = defineModel<number>("page");
const size = defineModel<number>("size");

defineEmits<{
  (e: "get"): void;
}>();
</script>

<style lang="css">
:root {
  .el-pagination {
    --el-pagination-button-disabled-bg-color: none;
    --el-pagination-bg-color: none;
    --el-pagination-button-height: 40px;
    --el-pagination-button-width: 44px;
    --el-text-color-regular: var(--primary-500);
  }
}
</style>

<style lang="css">
.el-pagination .btn-prev {
  @apply !ml-auto rounded-l-lg;
}

.el-pagination .btn-next {
  @apply rounded-r-lg;
}

.el-pagination .btn-prev,
.el-pagination .btn-next {
  @apply p-2 border border-solid border-surface-20;
}

.el-pager li {
  @apply border border-solid border-surface-20;
}

.el-pager li.is-active {
  @apply bg-primary-900 text-primary-color font-normal;
}

.el-pager li {
  @apply text-primary-color
}

.el-pagination .btn-prev, .el-pagination .btn-next {
  @apply text-primary-color
}
</style>
