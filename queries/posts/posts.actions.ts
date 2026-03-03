import { useApi } from '@/composables/api/useApi'
import type { components } from '@/types/swagger/schema'
import { postsUrls } from './posts.api-paths'

type AccidentDto = components['schemas']['AccidentDto']

export async function getPostsMethod(): Promise<AccidentDto[]> {
  const { get } = useApi()
  const { data } = await get<AccidentDto[]>(postsUrls.posts)
  return data
}

export async function getPostsDetailMethod(id: number): Promise<AccidentDto[]> {
  const { get } = useApi()
  const { data } = await get<AccidentDto[]>(postsUrls.detail(id))
  return data
}
