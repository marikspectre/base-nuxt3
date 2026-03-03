# 🧠 Queries Layer Documentation (`/queries`)

## 📌 Overview

The `/queries` layer contains all **Vue Query (TanStack Query)** logic:

- `useQuery` for fetching (server state)
- `useMutation` for creating/updating/deleting
- cache invalidation, optimistic updates, refetch rules, retry rules

This layer sits **between `/api` and UI components**.

✅ UI components should **consume** queries  
✅ `/api` should only do HTTP requests  
✅ `/queries` should orchestrate server-state behavior

---

## 🎯 Responsibilities

The `/queries` layer should:

- Define query keys (`queryKey`)
- Call functions from `/api` as `queryFn` / `mutationFn`
- Configure caching (`staleTime`, `gcTime`)
- Configure refetching (`refetchOnWindowFocus`, `refetchOnMount`)
- Handle cache updates:
  - `invalidateQueries`
  - `setQueryData`
  - optimistic updates (if needed)
- Provide consistent hooks:
  - `useUsersQuery()`
  - `useUserQuery(id)`
  - `useCreateUserMutation()`

---

## 🚫 What NOT to do here

Do NOT:

- ❌ Make raw HTTP calls (axios/fetch) directly — use `/api`
- ❌ Put UI logic (toasts, modals, navigation)
- ❌ Put heavy business logic (formatting for UI, complex filtering)
- ❌ Use Pinia for server state (Vue Query owns server state)

_(Small light mapping/normalization is OK if it’s truly API-related.)_

---

## 📂 Suggested Structure

### Option A: Simple (small/medium projects)

```txt
/queries
  user
    useUsersQuery.ts
    useUserQuery.ts
    useCreateUserMutation.ts
    useUpdateUserMutation.ts
    useDeleteUserMutation.ts
  post
    usePostsQuery.ts
    useCreatePostMutation.ts
```
