<template>
  <el-form :model="formData" ref="formDataRef" :rules="formDataRules" label-position="top"
    class="flex flex-col gap-1.5 p-4 rounded-2xl bg-surface-40" v-loading="loading">
    <el-form-item :label="$t('test.form.number')" prop="wagonNumber">
      <FormInput :prefix-icon="IconCoinNumber" v-model="formData.login"
        :placeholder="$t('test.form.numberPlaceholder')" />
    </el-form-item>

    <el-form-item :label="$t('test.form.number')" prop="wagonNumber">
      <FormInput :prefix-icon="IconCoinNumber" v-model="formData.login"
        :placeholder="$t('test.form.numberPlaceholder')" />
    </el-form-item>

    <div class="flex gap-4">
      <Button @click.prevent="$emit('cancel')" :title="$t('action.cancel')" type="reset" variant="outlined"
        class="h-10 grow"></Button>

      <Button @click.prevent="onSubmit" :title="$t('action.download')" :icon="IconDownload" type="submit"
        color="success" class="h-10 grow"></Button>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { IconDownload, IconCoinNumber } from "#components";
import type { components } from "@/api/apiMethods.types";
import type { ElForm } from "element-plus";

type FormData = components["schemas"]["CreateAccountRequest"];

const formData = reactive<Partial<FormData>>({
  login: "",
  password: "",
  profileId: undefined,
  role: undefined,
});

const emit = defineEmits(["cancel", "get", "save"]);

const props = defineProps({
  mode: {
    type: String,
    required: true
  },
  selectedId: {
    type: [Number, null] as PropType<number | null>,
    required: false
  },
})

const formDataRef = ref<InstanceType<typeof ElForm>>();
const loading = ref<boolean>(false);

const formDataRules = {
  wagonNumber: [{ required: true, message: "", trigger: "blur" }],
  konteyner: [{ required: true, message: "", trigger: "blur" }],
  cargoRise: [{ required: true, message: "", trigger: "blur" }]
};

function onSubmit() {
  formDataRef.value?.validate((valid) => {
    if (valid) {
      emit('save', formData);
    }
  });
}
</script>
