# Layouts (Nuxt 3)

The `/layouts` directory defines the global structure of pages in the application.

Layouts are used to wrap pages with shared UI such as:

- headers
- sidebars
- footers
- navigation
- global wrappers

---

## Purpose

- Provide consistent structure across pages
- Avoid duplication of UI elements
- Separate layout concerns from page logic
- Enable flexible page-level layout selection

---

## Basic Concept

Each page can specify which layout it uses:

```ts
definePageMeta({
  layout: "default"
});
```
