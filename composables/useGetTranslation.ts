export const useGetTranslation = (data: any) => {
  const { locale } = useI18n()
  const currentLang = computed(() => locale?.value)

  return data?.[currentLang.value]
}
