<template>
  <el-input v-model="type" v-loading="isLoading" placeholder="123" />
</template>

<script setup lang="ts">
import { usePostsQuery } from '@/queries/posts/posts.queries';

const type = ref('def')

const { data, isLoading } = usePostsQuery({ params: type })
</script>