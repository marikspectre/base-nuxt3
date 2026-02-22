import { defineStore } from "pinia";

export const useHeadTitleStore = defineStore("headTitle", {
  state: () => ({
    headTitle: "" as string,
    ignoreList: ['camera-wagons-id', 'scales-stations-code', 'helmet-companies-id'] as string[],
  }),

  actions: {
    setHeadTitle(title: string) {
      this.headTitle = title;
    },
  }
});