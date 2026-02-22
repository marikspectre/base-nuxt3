import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { usePermissionStore } from '@/store/permissionsStore'
import type { PermissionKey } from '@/types'

export function useAbility() {
  const permissionStore = usePermissionStore()
  const { permissionKeys } = storeToRefs(permissionStore)

  const can = (key: PermissionKey | PermissionKey[]) => {
    const keys = Array.isArray(key) ? key : [key]
    return keys.every(k => permissionKeys.value.includes(k))
  }

  const canAny = (keys: PermissionKey[]) => {
    return keys.some(k => permissionKeys.value.includes(k))
  }

  const keys = computed(() => permissionKeys.value as PermissionKey[])

  return {
    can,
    canAny,
    keys,
  }
}
