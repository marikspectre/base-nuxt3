<template>
  <div class="h-full w-full">
    <Authview />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

definePageMeta({
  layout: "auth-layout"
});

useHead(() => ({
  title: t('pageTitles.auth.loginPage'),
}))

</script>