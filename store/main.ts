export enum SystemType {
  None = 0,
  Scale = 1 << 0,
  Helmet = 1 << 1,
  Vision = 1 << 2,
  Management = 1 << 3,
  Assistant = 1 << 4,
}

type SelectOption = {
  label: string;
  value: string | number;
};

import type { TError } from "@/types";
import { defineStore } from "pinia";
export const useMainStore = defineStore("mainStore", {
  state: () => ({
    systemType: {
      none: SystemType.None,
      scale: SystemType.Scale,
      helmet: SystemType.Helmet,
      vision: SystemType.Vision,
      management: SystemType.Management,
      assistant: SystemType.Assistant,
    },
    systemTypeOptions: [
      { label: "scale", value: SystemType.Scale },
      { label: "helmet", value: SystemType.Helmet },
      { label: "vision", value: SystemType.Vision },
      { label: "management", value: SystemType.Management },
      { label: "assistant", value: SystemType.Assistant },
    ] as SelectOption[],
    pendingApiPaths: [] as string[],
    showError: false,
    errorMsg: null as TError | null,
  }),

  getters: {
    translatedSystemOptions: (state: any) => {
      const { t } = useI18n();
      return state.systemTypeOptions.map((opt: SelectOption) => ({
        label: t(`systemTypes.${opt.label}`),
        value: opt.value,
      }));
    },
    isLoading: (state) => state.pendingApiPaths.length > 0,

  },

  actions: {
    addPendingApiPath(path: string) {
      if (!this.pendingApiPaths.includes(path)) {
        this.pendingApiPaths.push(path)
      }
    },

    removePendingApiPath(path: string) {
      this.pendingApiPaths = this.pendingApiPaths.filter(p => p !== path)
    },

    setErrorMsg(error: TError) {
      this.errorMsg = error
    },

    clearError() {
      this.showError = false
      this.errorMsg = null
    },
  },
});