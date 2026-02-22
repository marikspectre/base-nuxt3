<template>
  <el-select v-model="model" v-bind="props">
    <template #prefix>
      <div class="pr-2 border-r border-surface-20 h-full flex items-center">
        <PrefixIcon :icon="icon" />
      </div>
    </template>

    <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value" />
  </el-select>
</template>

<script setup lang="ts">
type SelectOption = {
  label: string;
  value: string | number;
};

interface ElSelectProps {
  multiple?: boolean
  disabled?: boolean
  valueKey?: string
  size?: 'large' | 'default' | 'small'
  clearable?: boolean
  collapseTags?: boolean
  collapseTagsTooltip?: boolean
  multipleLimit?: number
  name?: string
  effect?: 'light' | 'dark'
  autocomplete?: string
  placeholder?: string
  filterable?: boolean
  allowCreate?: boolean
  remote?: boolean
  remoteMethod?: (query: string) => void
  loading?: boolean
  loadingText?: string
  noMatchText?: string
  noDataText?: string
  popperClass?: string
  reserveKeyword?: boolean
  defaultFirstOption?: boolean
  teleported?: boolean
  persistent?: boolean
  automaticDropdown?: boolean
  clearIcon?: string | Component
  fitInputWidth?: boolean,
  options: SelectOption[],
  icon: object,
}


const props = withDefaults(defineProps<ElSelectProps>(), {
  clearable: true,
  collapseTags: true,
})

const model = defineModel<string | number | number[] | string[]>();
</script>

<style lang="css">
.el-select__wrapper {
  @apply h-10 gap-2 p-2 rounded-lg shadow-none bg-surface-50 border border-surface-20;
}

.el-select__prefix {
  @apply gap-2;
}

.is-disabled {
  @apply !blur-[1px];
}
</style>
