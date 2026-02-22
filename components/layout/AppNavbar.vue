<template>
  <div class="h-[52px] flex justify-between items-center p-2 rounded-xl bg-surface-50 border border-surface-30">
    <div class="flex items-center gap-2">
      <BackButton v-if="isBackButton" />
      <span v-if="activeRoute && headTitle" class="text-primary-color font-semibold text-xl"
        :class="!isBackButton && 'ml-2'">
        {{ isLocalizationTitle ? $t(headTitle) : headTitle }}
      </span>
      <span v-else-if="headTitle" class="text-primary-color font-semibold text-xl" :class="!isBackButton && 'ml-2'">
        {{ isLocalizationTitle ? $t(headTitle) : headTitle }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navigation } from "@/navigation";
import { useHeadTitleStore } from "@/store/titleStore";

const { t } = useI18n();

const route = useRoute();

const routeNamesWitthBackButton = [
  'camera-wagons-id',
  'scales-stations-code',
  'camera-wagons-id-camera_id',
  'app-roles-id',
  'scales-by-border-code'
];

const selectedPlatform = computed<"scales" | "camera" | "helmet" | "app" | "chat">(() => {
  if (route.path.startsWith("/scales")) return "scales";
  if (route.path.startsWith("/camera")) return "camera";
  if (route.path.startsWith("/helmet")) return "helmet";
  if (route.path.startsWith("/app")) return "app";
  if (route.path.startsWith("/chat")) return "chat";
  return "scales";
});

const navItem = computed(() =>
  navigation(t)[selectedPlatform.value].find(nav => nav.isActive)
);

const isBackButton = computed(() => {
  return routeNamesWitthBackButton.includes(route.name as string);
});

const activeRoute = computed(() => {
  if (!navItem.value) return;
  return navItem.value.routes.find(r => route.path.includes(r.route));
});

const isLocalizationTitle = computed(() => {
  return headTitle.value.includes('.');
});


const head = useHeadTitleStore()
const headTitle = computed(() => head.headTitle)
</script>
