// composables/useQuerySync.ts
import { ref, watch, toRaw, nextTick } from 'vue';
import { useRoute, useRouter } from '#imports';

type SyncOptions<T> = {
  keys?: (keyof T & string)[];
};

export function useQuerySync<T extends Record<string, any>>(params: T, options: SyncOptions<T> = {}) {
  const route = useRoute();
  const router = useRouter();

  const initial = toRaw({ ...params }) as T;

  const keys = (options.keys ?? Object.keys(initial)) as (keyof T & string)[];
  const lock = ref(false);

  const syncFromQuery = () => {
    lock.value = true;

    keys.forEach((key) => {
      const rawVal = route.query[key];
      if (rawVal == null) return;

      const baseVal = (initial as any)[key];
      let value: any = Array.isArray(rawVal) ? rawVal[0] : rawVal;

      if (typeof baseVal === 'number') {
        const n = Number(value);
        if (!Number.isNaN(n)) value = n;
        else return;
      } else if (typeof baseVal === 'boolean') {
        value = value === 'true' || value === '1';
      }

      (params as any)[key] = value;
    });

    nextTick(() => {
      lock.value = false;
    });
  };

  const syncToQuery = () => {
    if (lock.value) return;
    if (import.meta.server) return;

    const newQuery: Record<string, any> = { ...route.query };

    keys.forEach((key) => {
      const v = (params as any)[key];
      const isEmpty = v === undefined || v === null || v === '';

      if (isEmpty) {
        delete newQuery[key];
      } else {
        newQuery[key] = String(v);
      }
    });

    router.replace({
      query: newQuery,
    });
  };

  syncFromQuery();

  watch(
    () => route.query,
    () => syncFromQuery(),
    { deep: true }
  );

  watch(
    params,
    () => syncToQuery(),
    { deep: true }
  );

  return {
    syncFromQuery,
    syncToQuery,
  };
}
