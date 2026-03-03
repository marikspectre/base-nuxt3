import { useQuery } from "@tanstack/vue-query"
import { getPostsDetailMethod, getPostsMethod } from "./posts.actions"
import { postsKeys } from "./posts.keys"

export const usePostsQuery = ({ params }: { params: any }) => {
  return useQuery({
    queryKey: [...postsKeys.all, params],
    queryFn: () => getPostsMethod()
  })
}

export const usePostsDetailQuery = (id: number) => {
  return useQuery({
    queryKey: postsKeys.detail(id),
    queryFn: () => getPostsDetailMethod(id)
  })
}