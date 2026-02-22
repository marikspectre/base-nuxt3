import { apiMethods } from "~/api/apiMethods";
import type { UseFetchOptions } from "nuxt/app";
type TUseFetchOptions = UseFetchOptions<any, any, any, any>; //fix me

export default function useApiService(options: TUseFetchOptions = {}) {
  return apiMethods(options)
}