export const useApi = () => {
  const { $axios } = useNuxtApp()

  return {
    get: $axios.get,
    post: $axios.post,
    put: $axios.put,
    delete: $axios.delete,
  }
}