import { ElNotification } from "element-plus";

export default function useApi<T>(url: string, baseOptions: any = {}) {
  url = url.replace("/api/v1", "");
  const { $i18n } = useNuxtApp();
  const t = $i18n.t.bind($i18n);
  const locale = $i18n.locale.value;
  const config = useRuntimeConfig();
  const { getAccessToken, refreshAccessToken } = useAuth();
  const router = useRouter();

  const accessToken = getAccessToken();
  const headers: Record<string, string> = {
    ...(baseOptions.headers || {}),
    "accept-language": locale || "uz",
  };


  const ignoreList = ["/auth", "/auth/refresh"];

  const fetchOptions = {
    baseURL: config.public.NUXT_PUBLIC_API_BASE_URL,
    watch: false,
    ...baseOptions,
    headers: {
      ...baseOptions.headers,
      ...headers,
      Authorization: `Bearer ${accessToken}`
    },
    key: new Date().getTime().toString(),
    transform: (
      response: T extends void ? unknown : T
    ): T extends void ? unknown : T =>
      (response && typeof response === "object" && "data" in response
        ? response
        : response) as T extends void ? unknown : T,
    onResponseError: async ({
      response,
      options,
    }: {
      response: any;
      options: any;
    }) => {
      if (response.status === 401 && !ignoreList.includes(url)) {
        const refreshed = await refreshAccessToken();
        if (refreshed) {
          const newAccessToken = getAccessToken();
          options.headers = {
            ...baseOptions.headers,
            ...headers,
            ...options.headers,
            Authorization: `Bearer ${newAccessToken}`,
          };
          window.location.reload();
          return await useApi<T>(url, options);
        } else {
          router.push("/auth");
        }
      }
    },
    onResponse: async ({
      response,
      options,
    }: {
      response: any;
      options: any;
    }) => {
      const message =
        response?._data?.message ?? t("action.dataSuccessfullyUpdated");
      const isSuccess = response?.status === 200 || response?.status === 201 || false;

      if (
        isSuccess &&
        !ignoreList.includes(url) &&
        (options.method === "POST" ||
          options.method === "PUT" ||
          options.method === "PATCH" ||
          options.method === "DELETE") &&
        (response.status === 201 || response.status === 200)
      ) {
        ElNotification.success({
          title: t("action.success"),
          message: message,
          duration: 3000,
        });
      }

      if ((response.status === 400 || response.status === 409) && (options.method === "POST" ||
        options.method === "PUT" ||
        options.method === "PATCH")) {
        ElNotification.error({
          title: t("action.error"),
          message: message,
          duration: 3000,
        });
      }
    },
  };
  return useFetch<T>(url, fetchOptions);
}