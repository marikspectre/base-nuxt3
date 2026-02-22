import type { components } from '@/api/apiMethods.types'
import { defineStore } from 'pinia'

type ChatBotGetSessionsResponse = components['schemas']['ChatBotGetSessionsResponse']
type ChatBotSession = components['schemas']['ChatBotSession']

export const useChatStore = defineStore('chatStore', () => {
  const sessions = ref<ChatBotSession[]>([])
  const userChatSessions = ref<ChatBotGetSessionsResponse>()
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchSessions = async () => {
    try {
      loading.value = true
      error.value = null

      const api = useApiService()
      const { data } = await api.ChatBot.getChatBotSessions()
      if (data.value) {
        sessions.value = data.value?.sessions ?? []
        userChatSessions.value = data.value
      }
    } catch (e: any) {
      console.error('Failed to fetch chat sessions', e)
      error.value = e?.message ?? 'Failed to fetch chat sessions'
    } finally {
      loading.value = false
    }
  }

  return {
    sessions,
    loading,
    error,
    fetchSessions,
  }
})
