export const usePersistStore = defineStore("persistStore", {
  state: () => ({
    // Define your persistent state properties here
    userPreferences: {} as Record<string, any>,
    sessionData: {} as Record<string, any>,
  }),

  actions: {
    // Define actions to modify the persistent state here
    setUserPreferences(preferences: Record<string, any>) {
      this.userPreferences = preferences;
    },
    setSessionData(data: Record<string, any>) {
      this.sessionData = data;
    },
  },
});