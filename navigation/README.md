# Navigation Module

This folder contains the application navigation definition (sidebar/topbar menus) in a **structured and scalable** way.

The navigation is split into:

- **static structure** (routes, i18n keys, icons, permissions)
- **runtime mapping** (translate labels, filter by role, build active states)

---

## Folder Structure

navigation/
├── index.ts # public entry point (exports)
├── list.ts # static navigation items (no runtime logic)
└── navigation.ts # builders/helpers (translation, filtering, mapping)

---

## Responsibilities

### `list.ts` (Static definition)

**Contains ONLY static data**:

- route path
- i18n key (not translated text)
- optional icon name
- optional access control (roles/permissions)
- optional grouping

✅ Allowed:

- plain objects / arrays
- `as const` for type safety

❌ Not allowed:

- calling `useI18n()`
- calling `$fetch`, API, stores
- reading cookies/localStorage
- using `window`/DOM

---

### `navigation.ts` (Runtime builder)

Contains functions that **convert the static list into UI-ready navigation**:

- converts `key` → `label` using `t()`
- filters items by role/permission
- optionally adds `isActive`, `children`, badges, etc.

✅ Allowed:

- composables usage (`useI18n`, `useRoute`, auth composables)
- business rules for menu visibility

---

### `index.ts` (Exports)

Single entry point that re-exports the public API of this module.

Example goals:

- clean imports: `import { useNavigation } from "@/navigation"`
- hide internal file structure from the rest of the app

---

## Recommended Data Model

### Navigation item (static)

Each item should use an i18n key:

```ts
type NavItemStatic = {
  key: string;
  path: string;
  icon?: string;
  roles?: string[];
  children?: NavItemStatic[];
  permission: string;
  showUi: boolean;
};
```
