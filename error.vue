<template>
  <div class="w-screen h-screen p-4 relative">
    <img class="absolute -top-[37px] -left-4 z-50" :src="AuthTopLeft" :alt="AuthTopLeft" />
    <img class="absolute -top-[63px] -right-12 z-50" :src="AuthTopRight" :alt="AuthTopRight" />
    <img class="absolute -bottom-[37px] -left-[63px] z-50" :src="AuthBottomLeft" :alt="AuthBottomLeft" />
    <img class="absolute -bottom-[19px] right-0 z-50" :src="AuthBottomRight" :alt="AuthBottomRight" />
    <div
      class="p-4 border h-full w-full bg-radial-auth dark:bg-dark-radial-auth flex flex-col gap-10 justify-center items-center rounded-2xl">
      <img :src="ErrorImage" :alt="ErrorImage" />

      <div class="flex items-center justify-center flex-col gap-10">
        <div class="flex flex-col justify-center text-center gap-1">
          <span class="text-[#0A0F1A] dark:text-white font-bold text-[30px]">{{ $t('error.pageNotFound') }}</span>
          <span class="text-primary-300">{{ $t('error.route') }}</span>
        </div>

        <div class="flex justify-center">
          <Button class="w-[250px]" color="info" @click="$router.push(firstAllowedRoute)"
            :title="$t('error.homePage')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthTopLeft from "~/assets/images/auth-top-left.png"
import AuthTopRight from "~/assets/images/auth-top-right.png"
import AuthBottomLeft from "~/assets/images/auth-bottom-left.png"
import AuthBottomRight from "~/assets/images/auth-bottom-right.png"
import ErrorImage from "~/assets/images/404.png"

import { platformRoutes } from "@/constants";

const systems = Number(useCookie("systems").value ?? 0);

const hasPermission = (sys: number, required: number) =>
  (sys & required) === required;

const firstAllowedRoute = computed(() => {
  for (const p of platformRoutes) {
    if (hasPermission(systems, p.permission)) {
      return p.route;
    }
  }
  return "/auth";
});
</script>
