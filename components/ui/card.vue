<template>
  <div class="w-full p-2 flex flex-col gap-2 bg-surface-50 border border-surface-30 shadow-card rounded-lg">
    <span class="text-primary-color font-semibold text-sm py-1">
      <slot name="title" />
    </span>
    <div class="flex gap-4 justify-between bg-surface-40 border border-surface-30 p-2 rounded-lg items-center">
      <div class="flex flex-col gap-1">
        <div class="flex gap-2 items-center">
          <div>
            <span class="font-semibold text-primary-color text-[31px]">
              <slot name="total" />
            </span>
          </div>
          <slot name="increment" />
        </div>
      </div>
      <div class="p-2 border border-surface-30 rounded-lg">
        <slot name="icon" />
      </div>
    </div>

    <div class="flex justify-between items-center h-8" v-if="hasIcon">
      <div>
        <span class="text-[#323954] dark:text-gray-500 text-[13px]">
          <slot name="comparisonText" />
        </span>
      </div>
      <icon-arrow-right />
    </div>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for this component as it uses slots for dynamic content
defineProps(
  {
    hasIcon: {
      type: Boolean,
      default: true,
    },
  }
);
</script>
