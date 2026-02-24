# Stores (Pinia) — Nuxt 3

The `/stores` directory contains all Pinia stores used by the application.

Pinia stores are responsible for **client-side state management**:

- UI state shared across pages (modals, filters, tabs)
- session/user state (when not handled purely via cookies)
- cached client data that is not a good fit for server-state tools

> **Important:** Prefer **TanStack Query / `$fetch` caching** for server state (API data).
> Use Pinia for **client state** and cross-component UI logic.

---

## Purpose

- Centralize shared state
- Keep components thin and focused on UI
- Avoid prop-drilling and event chains
- Provide predictable state + actions for complex flows

---

## Recommended Structure

stores/
├── index.ts
├── auth.store.ts
├── ui.store.ts
├── filters.store.ts
└── settings.store.ts

`Optional (for larger apps):`

stores/
├── auth/
│ ├── auth.store.ts
│ ├── auth.types.ts
│ └── auth.mappers.ts
└── ui/
├── ui.store.ts
└── ui.types.ts

---

## Naming Convention

- File names: `*.store.ts`
- Store ids: `useXxxStore`

Examples:

- `auth.store.ts` → `useAuthStore`
- `ui.store.ts` → `useUiStore`

---

## Nuxt 3 + Pinia Notes

- Nuxt 3 auto-integrates Pinia when configured via module (common setup).
- Stores can be imported and used anywhere:

```ts
const auth = useAuthStore();
```
