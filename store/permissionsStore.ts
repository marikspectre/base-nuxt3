import type { components } from "@/api/apiMethods.types";

type PermissionDto = components["schemas"]["PermissionDto"];
type GetMeResponse = components["schemas"]["GetMeResponse"];

export const usePermissionStore = defineStore("persistStore", {
  state: () => ({
    permission: [] as PermissionDto[],
    userInfo: null as GetMeResponse | null,
  }),

  getters: {
    getPermissions: (state) => state.permission,
    getUserInfo: (state) => state.userInfo,
    permissionKeys: (state) => state.permission.map(p => p.key),
  },

  actions: {
    setPermissions(permissions: PermissionDto[]) {
      this.permission = permissions;
    },
    setUserInfo(userInfo: GetMeResponse) {
      this.userInfo = userInfo;
    }
  },
});