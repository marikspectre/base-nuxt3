import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const api = axios.create({
    baseURL: config.public.NUXT_PUBLIC_API_BASE_URL,
  })

  // request interceptor
  api.interceptors.request.use((config) => {
    const token = useCookie('token').value
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })

  // response interceptor
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('API Error:', error.response?.data || error.message)
      return Promise.reject(error)
    }
  )

  return {
    provide: {
      axios: api,
    },
  }
})