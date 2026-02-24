# Middleware (Nuxt 3)

The `/middleware` directory contains route-level guards used to control navigation and access in the application.

Middleware runs **before a page is rendered** and is typically used for:

- authentication checks
- authorization (roles/permissions)
- redirects
- feature flags
- request validation

---

## Purpose

- Control access to routes
- Enforce authentication and authorization rules
- Centralize navigation logic
- Improve security and consistency

---

## Types of Middleware

### 1. Named Middleware (recommended)

Defined in `/middleware` and used per page:

middleware/
├── auth.ts
├── guest.ts
├── role.ts

Usage:

```ts
definePageMeta({
  middleware: ["auth"]
});
```

### 2. Global Middleware

middleware/
└── auth.global.ts

### 3. Inline Middleware

Usage:

```ts
definePageMeta({
  middleware: [
    () => {
      const user = useAuth();
      if (!user.value) {
        return navigateTo("/login");
      }
    }
  ]
});
```
