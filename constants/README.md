# Constants (Nuxt 3)

The `/constants` directory contains all static, immutable values used across the application.

These values should **never change at runtime** and must be centralized to ensure consistency and maintainability.

---

## Purpose

- Avoid hardcoding values across the codebase
- Ensure consistency in keys, enums, and configuration
- Improve readability and maintainability
- Provide a single source of truth

---

## Recommended Structure

constants/
├── api/
│ ├── endpoints.ts
│ └── queryKeys.ts
│
├── app/
│ ├── routes.ts
│ └── config.ts
│
├── roles/
│ └── roles.enum.ts
│
├── ui/
│ ├── colors.ts
│ └── sizes.ts
│
└── index.ts

---

## Folder Responsibilities

- `api/` → API endpoints, query keys, headers
- `app/` → routes, app-level config
- `roles/` → enums for roles/permissions
- `ui/` → design constants (colors, spacing, breakpoints)
- `index.ts` → central export (optional)

---

## Naming Convention

- Use **UPPER_SNAKE_CASE** for constant values
- Use **camelCase** for grouped objects
- Use **PascalCase** for enums
