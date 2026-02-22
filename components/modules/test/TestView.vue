<script setup lang="ts">
import type { Mode } from '@/types';

const openCreateWagonModel = ref<boolean>(false);
const mode = ref<Mode>("create");
const selectedId = ref<number | null>(null);

const execute = () => {
  // TODO get table data
}

const openCreate = () => {
  mode.value = "create";
  selectedId.value = null;
  openCreateWagonModel.value = true;
};

const openEdit = (id: number) => {
  mode.value = "edit";
  selectedId.value = id;
  openCreateWagonModel.value = true;
};

const openView = (id: number) => {
  mode.value = "view";
  selectedId.value = id;
  openCreateWagonModel.value = true;
};

const onCancel = () => {
  // TODO: if form is dirty, big-ass, show confirmation dialog
  openCreateWagonModel.value = false;
};

// TODO fix the attribute type for form data
const onSaved = (formData: any) => {
  openCreateWagonModel.value = false;

  if (mode.value === "create") {
    // TODO: table item create logic
  } else if (mode.value === "edit") {
    // TODO: table edit logic
  }

  //TODO for both of them need a refresh table items
  //FIX wrote execute logic
};
</script>

<template>
  <Modal v-model="openCreateWagonModel" :title="$t('action.create.createNewTestItem')">
    <TestForm :mode="mode" :selectedId="selectedId" @cancel="onCancel" @save="onSaved" @get="execute" />
  </Modal>

  <div class="flex flex-col gap-4 flex-1">
    <TestFilter />

    <div class="flex gap-2">
      <el-button type="primary" @click="openCreate">Create</el-button>
      <el-button @click="openEdit(12)">Edit #12</el-button>
      <el-button @click="openView(12)">View #12</el-button>
    </div>

    <TestTable />
    <Pagination :total="100" />
  </div>
</template>