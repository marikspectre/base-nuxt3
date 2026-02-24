<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import { useElementLocale } from '@/composables/ui/useElementLocale'
import 'element-plus/theme-chalk/dark/css-vars.css'

const { elLocale } = useElementLocale()
</script>

<template>
  <ElConfigProvider :locale="elLocale">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ElConfigProvider>
</template>
