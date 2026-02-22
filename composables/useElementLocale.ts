import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import type { Language } from 'element-plus/es/locale'

import en from 'element-plus/dist/locale/en.mjs'
import ru from 'element-plus/dist/locale/ru.mjs'
import uz from 'element-plus/dist/locale/uz-uz.mjs'

const elLocales: Record<string, Language> = {
  uz,
  en,
  ru,
  kril: {
    name: 'kril',
    el: {
      "pagination": {
        "goto": "Саҳифага ўтиш",
        "pagesize": "/ саҳифа",
        "total": "Жами {total}",
        "pageClassifier": "саҳифа",
        "page": "Саҳифа",
        "prev": "Олдинги саҳифа",
        "next": "Кейинги саҳифа",
        "currentPage": "{pager}-саҳифа",
        "prevPages": "Олдинги {pager} та",
        "nextPages": "Кейинги {pager} та",
        "deprecationWarning": "Эскирган параметр, Element Plus ҳужжатларини текширинг."
      },

      "datepicker": {
        "now": "Ҳозир",
        "today": "Бугун",
        "cancel": "Бекор қилиш",
        "clear": "Тозалаш",
        "confirm": "Тасдиқлаш",
        "dateTablePrompt": "Календарда сана танланг",
        "monthTablePrompt": "Ойни танланг",
        "yearTablePrompt": "Йилни танланг",
        "selectDate": "Санани танланг",
        "selectTime": "Вақтни танланг",
        "startDate": "Бошланиш санаси",
        "startTime": "Бошланиш вақти",
        "endDate": "Тугаш санаси",
        "endTime": "Тугаш вақти",
        "prevYear": "Ўтган йил",
        "nextYear": "Кейинги йил",
        "prevMonth": "Ўтган ой",
        "nextMonth": "Кейинги ой",
        "year": "йил",
        "month1": "Январ",
        "month2": "Феврал",
        "month3": "Март",
        "month4": "Апрел",
        "month5": "Май",
        "month6": "Июн",
        "month7": "Июл",
        "month8": "Август",
        "month9": "Сентябр",
        "month10": "Октябр",
        "month11": "Ноябр",
        "month12": "Декабр",
        "week": "ҳафта",
        "weeks": {
          "sun": "Якш",
          "mon": "Душ",
          "tue": "Сеш",
          "wed": "Чор",
          "thu": "Пай",
          "fri": "Жум",
          "sat": "Шан"
        },
        "months": {
          "jan": "Январ",
          "feb": "Феврал",
          "mar": "Март",
          "apr": "Апрел",
          "may": "Май",
          "jun": "Июн",
          "jul": "Июл",
          "aug": "Август",
          "sep": "Сентябр",
          "oct": "Октябр",
          "nov": "Ноябр",
          "dec": "Декабр"
        }
      },

      "timepicker": {
        "confirm": "Тасдиқлаш",
        "cancel": "Бекор қилиш",
        "now": "Ҳозир",
        "selectTime": "Вақтни танланг",
        "startTime": "Бошланиш вақти",
        "endTime": "Тугаш вақти"
      },

      "select": {
        "loading": "Юкланмоқда",
        "noMatch": "Мос маълумот топилмади",
        "noData": "Маълумот йўқ",
        "placeholder": "Танланг"
      },

      "cascader": {
        "noMatch": "Мос маълумот топилмади",
        "loading": "Юкланмоқда",
        "placeholder": "Танланг",
        "noData": "Маълумот йўқ"
      },

      "table": {
        "emptyText": "Маълумот йўқ",
        "confirmFilter": "Қўллаш",
        "resetFilter": "Тозалаш",
        "clearFilter": "Ҳаммасини",
        "sumText": "Жами"
      },

      "tree": {
        "emptyText": "Маълумот йўқ"
      },

      "transfer": {
        "noMatch": "Мос маълумот топилмади",
        "noData": "Маълумот йўқ",
        "titles": ["Рўйхат 1", "Рўйхат 2"],
        "filterPlaceholder": "Калит сўз бўйича қидиринг",
        "noCheckedFormat": "{total} та элемент",
        "hasCheckedFormat": "{checked}/{total} та танланган"
      },

      "upload": {
        "deleteTip": "Ўчириш учун ОТМЕНИТЬ тугмасини босинг",
        "delete": "Ўчириш",
        "preview": "Кўриш",
        "continue": "Давом этиш",
        "upload": "Юклаш",
        "drag": "Файлларни бу ерга тортиб олиб келинг ёки юклаш учун босинг",
        "tip": "Фақат белгиланган формат ва ҳажмдаги файллар қабул қилинади"
      },

      "messagebox": {
        "title": "Хабар",
        "confirm": "ОК",
        "cancel": "Бекор қилиш",
        "error": "Нотўғри киритиш"
      },

      "dialog": {
        "close": "Ёпиш"
      },

      "popconfirm": {
        "confirmButtonText": "Ҳа",
        "cancelButtonText": "Йўқ"
      },

      "empty": {
        "description": "Маълумот йўқ"
      },

      "image": {
        "error": "Хатолик"
      },

      "colorpicker": {
        "confirm": "ОК",
        "clear": "Тозалаш"
      },

      "form": {
        "required": "Бу майдон мажбурий"
      },

      "tour": {
        "next": "Кейинги",
        "prev": "Олдинги",
        "finish": "Тугатиш"
      },

      "pageHeader": {
        "title": "Орқага"
      },

      "slider": {
        "defaultLabel": "Слайдер қиймати",
        "defaultRangeStartLabel": "Диапазон боши",
        "defaultRangeEndLabel": "Диапазон охири"
      },

      "drawer": {
        "close": "Ёпиш"
      },

      "popover": {
        "close": "Ёпиш"
      }
    }
  },
}

export function useElementLocale() {
  const { locale } = useI18n()

  const elLocale = computed<Language>(() => {
    return elLocales[locale.value] || en
  })

  return { elLocale }
}
