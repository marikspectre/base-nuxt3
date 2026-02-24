# Composables (Nuxt 3)

The `/composables` directory contains reusable logic that can be shared across components.
Composables are Vue 3 hooks designed to encapsulate stateful logic in a clean, scalable way.

---

## Purpose

- Separate business logic from UI components
- Promote reusability across the application
- Keep components clean and focused on presentation
- Improve maintainability and scalability

---

## Recommended Structure

├── query/
│ ├── useUsersQuery.ts
│ └── useUserDetailQuery.ts
│
├── ui/
│ ├── useModal.ts
│ └── useToast.ts
│
├── auth/
│ └── useAuth.ts
│
├── state/
│ └── useTheme.ts
│
└── utils/
├── useDebounce.ts
└── usePagination.ts

### Folder Responsibilities

- `query/` → Server state (API calls, caching, TanStack Query, etc.)
- `ui/` → UI-related logic (modals, toasts, toggles)
- `auth/` → Authentication and session handling
- `state/` → Global/shared client state
- `utils/` → Generic reusable logic

---

## Auto-import (Nuxt 3)

Nuxt automatically imports composables from the `/composables` directory.

✅ Example usage:

```ts
const { open, close, isOpen } = useModal();
```
