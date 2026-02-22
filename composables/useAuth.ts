export default function useAuth() {
  const accessToken = useCookie("access_token");
  const refreshToken = useCookie("refresh_token");

  // Получение текущего access token
  function getAccessToken(): string | null {
    return accessToken.value || null;
  }

  // Обновление access token
  async function refreshAccessToken(): Promise<boolean> {
    if (!refreshToken.value) {
      return false;
    }

    try {
      if (refreshToken.value) {
        const body = {
          refresh: refreshToken.value as string,
        };
        const { data, error } = await useApiService().Auth.AuthController_refresh(body);

        if (error.value || !data.value) {
          // Очищаем токены при неудачном обновлении
          clearTokens();
          return false;
        }
        // Обновляем токены
        accessToken.value = data.value.access;
        refreshToken.value = data.value.refresh;

        return true;
      } else {
        // Очищаем токены
        clearTokens();
        return false;
      }
    } catch {
      clearTokens();
      return false;
    }
  }

  function clearTokens() {
    useCookie("access_token", { maxAge: -1 }).value = "";
    useCookie("refresh_token", { maxAge: -1 }).value = "";
  }

  return {
    getAccessToken,
    refreshAccessToken,
    clearTokens
  };
}
