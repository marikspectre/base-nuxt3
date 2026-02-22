<template>
  <template v-if="data">
    <el-table :data="data" class="!h-full">
      <el-table-column label="№" :width="indexWidth || 50">
        <template #default="scope">
          {{ (page - 1) * size + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column v-for="column in columns" :key="column.prop" :prop="column.prop" :label="column.label"
        :width="column.width">
        <template #default="scope">
          <slot :name="column.prop" v-bind="scope">
            {{ scope.row[column.prop] }}
          </slot>
        </template>
      </el-table-column>

      <el-table-column v-if="actions && showAnyAction" :label="$t('action.plural')" :width="actions.width || 100"
        fixed="right">
        <template #default="{ row }">
          <div class="flex items-center gap-2">
            <button v-if="actions.view" @click="$emit('view', row)"
              class="!w-10 !h-10 flex items-center justify-center rounded-full border border-surface-30"
              v-can="props.permissions?.view">
              <el-icon class="w-8 h-8 text-primary-color">
                <View />
              </el-icon>
            </button>

            <button v-if="actions.edit" @click="$emit('edit', row)"
              class="!w-10 !h-10 flex items-center justify-center rounded-full border border-surface-30"
              v-can="props.permissions?.edit">
              <IconEdit class="w-4 h-4 text-primary-color" />
            </button>

            <button v-if="actions.assign" @click="$emit('assign', row)"
              class="!w-10 !h-10 flex items-center justify-center rounded-full border border-surface-30"
              v-can="props.permissions?.assign">
              <IconUserAdd class="w-4 h-4 text-primary-color" />
            </button>

            <button v-if="actions.delete" @click="$emit('delete', row)"
              class="!w-10 !h-10 flex items-center justify-center rounded-full border border-surface-30"
              v-can="props.permissions?.delete">
              <IconTrash class="w-4 h-4 text-primary-color" />
            </button>

            <button v-if="actions.download" @click="$emit('download', row)"
              class="!w-10 !h-10 flex items-center justify-center rounded-full border border-surface-30"
              v-can="props.permissions?.download">
              <IconDownload class="w-4 h-4 text-primary-color" />
            </button>

            <button v-if="actions.video && row.videoUrl" @click="$emit('video', row)"
              class="!w-10 !h-10 flex items-center justify-center rounded-full border border-surface-30"
              v-can="props.permissions?.video">
              <VideoCamera class="w-4 h-4 text-primary-color" />
            </button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </template>
  <template v-else>
    <el-empty :description="$t('table.empty')" />
  </template>
</template>

<script setup lang="ts" generic="Row extends Record<string, any>">
import { computed } from 'vue'
import { IconDownload } from '#components'
import { VideoCamera, View } from '@element-plus/icons-vue'
import type { PermissionKey } from '@/types';

interface Column<Row> {
  prop: keyof Row & string | string
  label: string
  width?: number
}

interface Actions {
  view?: boolean
  edit?: boolean
  delete?: boolean
  download?: boolean
  assign?: boolean
  width?: number
  video?: boolean
}

interface Permissions {
  view?: PermissionKey[],
  edit?: PermissionKey[],
  delete?: PermissionKey[],
  download?: PermissionKey[],
  assign?: PermissionKey[]
  video?: PermissionKey[]
}

type Props<Row> = {
  data?: Row[]
  columns: Array<Column<Row>>
  actions?: Actions
  permissions?: Permissions
  page?: number
  size?: number
  indexWidth?: number
}

const props = withDefaults(defineProps<Props<Row>>(), {
  page: 1,
  size: 10,
  actions: undefined,
  indexWidth: 50
})

type TableSlotScope<Row> = {
  row: Row
  column: Column<Row>
  $index: number
}

// 🔥 typed slots: any slot name gets { row, column, $index }
defineSlots<{
  [name: string]: (scope: TableSlotScope<Row>) => any
}>()

// optional but recommended: typed emits
const emit = defineEmits<{
  (e: 'view', row: Row): void
  (e: 'edit', row: Row): void
  (e: 'delete', row: Row): void
  (e: 'download', row: Row): void
  (e: 'assign', row: Row): void
  (e: 'video', row: Row): void
}>()

const showAnyAction = computed(
  () => props.actions && Object.values(props.actions).some(x => x === true)
)
</script>


<style lang="css">
:root {
  .el-table {
    --el-table-bg-color: none;
    --el-table-tr-bg-color: none;
    --el-table-row-hover-bg-color: none;
    --el-table-header-text-color: var(--primary-color);
    --el-table-text-color: var(--primary-color);
    --el-table-header-bg-color: var(--surface-30);
    --el-table-border-color: var(--surface-20);
  }
}
</style>

<style lang="css">
.el-table thead .el-table__cell {
  @apply border-t border-surface-20;
}

.el-table thead .el-table__cell:first-child {
  @apply rounded-l-lg border-l;
}

.el-table thead .el-table__cell:last-child {
  @apply rounded-r-lg border-r border-solid border-surface-20;
}

.el-table tbody .el-table__cell {
  @apply py-4 border-surface-30;
}

.el-table--enable-row-transition .el-table__body td.el-table__cell {
  @apply !bg-surface-40
}

.hover-row {
  @apply !bg-surface-40
}
</style>
