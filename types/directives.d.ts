import type { ObjectDirective } from 'vue'
import type { PermissionKey } from '@/types/permissions'

declare module 'vue' {
  interface GlobalDirectives {
    can: ObjectDirective<HTMLElement, PermissionKey | PermissionKey[]>
  }
}
