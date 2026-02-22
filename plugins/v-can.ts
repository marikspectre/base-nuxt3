// plugins/can.client.ts
import { defineNuxtPlugin } from '#app'
import { watch, type Directive, type ObjectDirective } from 'vue'
import { usePermissionStore } from '@/store/permissionsStore'
import type { PermissionKey } from '@/types'
export type CanDirective = Directive<HTMLElement, PermissionKey | PermissionKey[] | undefined>

const canDirective: ObjectDirective<HTMLElement, PermissionKey | PermissionKey[]> = {
  mounted(el, binding) {
    const store = usePermissionStore()

    const update = () => {
      applyVisibility(el, binding.value, store)
    }

    update()

    const stop = watch(
      () => store.permission,
      () => update(),
      { deep: true }
    )

      ; (el as any)._vCanStop = stop
  },

  updated(el, binding) {
    const store = usePermissionStore()
    applyVisibility(el, binding.value, store)
  },

  unmounted(el) {
    const stop: (() => void) | undefined = (el as any)._vCanStop
    if (stop) stop()
  },
}

function applyVisibility(
  el: HTMLElement,
  value: PermissionKey | PermissionKey[],
  store = usePermissionStore()
) {
  const userKeys = store.permission.map(p => p.key as string)
  const required = Array.isArray(value) ? value : [value]

  const hasAll = required.every(key => userKeys.includes(key))

  el.style.display = hasAll ? '' : 'none'
}

declare module 'vue' {
  export interface ComponentCustomProperties {
    vCan: CanDirective
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('can', canDirective)
})
