# Components

This folder contains all reusable UI and layout components used across the application.

## 📁 Structure

### `/layout`

Contains layout-level components that define the overall page structure.

Examples:

- Header
- Sidebar
- Footer
- Page wrappers

📌 Use when:

- Component is responsible for page composition
- Used across multiple pages as a structural element

---

### `/modules`

# Test Module

## 📦 Includes

- view
- filter
- form
- table

Example:

- `/test/TestView`
- `/test/TestFilter`
- `/test/TestForm`
- `/test/TestTable`

### `/shared`

Contains reusable **feature-level components** that are more complex and composed of multiple UI elements.

Examples:

- Card
- Chart
- UserProfileCard
- Data widgets

📌 Use when:

- Component has internal logic or composition
- Reused across multiple features/modules
- Not purely atomic

---

### `/ui`

Contains **atomic and base UI components**.

Examples:

- Button
- Input
- Select
- Table
- Checkbox
- Modal

📌 Use when:

- Component is a basic building block
- No business logic
- Highly reusable and configurable

---

## 🧩 Design Principles

- Follow **composition over duplication**
- Keep components **small and focused**
- Prefer **stateless components**
- Separate **UI and business logic**

---

## 📛 Naming Convention

- Use **PascalCase**
- Examples:
  - `BaseButton.vue`
  - `UserCard.vue`
  - `MainLayout.vue`

---

## 🚫 Anti-patterns

- ❌ API calls inside components
- ❌ Business logic in UI components
- ❌ Huge components (>300 lines)
- ❌ Duplicating existing components

---

## 🔁 Reusability Rules

Before creating a new component:

1. Check `/ui` for base components
2. Check `/shared` for similar patterns
3. Extend existing components if possible
