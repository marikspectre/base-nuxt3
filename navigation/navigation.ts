import { IconBarChart, IconList, IconMap, IconMessage, IconWagon } from "#components";
import { PERMISSION_KEYS, type PermissionKey } from "@/types";
import { OfficeBuilding } from "@element-plus/icons-vue";
import type { VueI18nTranslation } from "vue-i18n";

type NavigationKey = "scales" | "camera" | "helmet" | "app" | "chat";

interface NavigationRoute {
  title: string;
  pageTitle?: string;
  icon: any;
  route: string;
  permission: PermissionKey
}

interface NavigationSection {
  name: string;
  route: string;
  isActive: boolean;
  routes: NavigationRoute[];
}

type NavigationReturn = Record<NavigationKey, NavigationSection[]>;

export const navigation = (t: VueI18nTranslation): NavigationReturn => {
  return {
    scales: [
      {
        name: "scales",
        route: "/scales",
        isActive: true,
        routes: [
          {
            title: t("statistic.title"),
            pageTitle: t("wagon.statistics"),
            icon: IconBarChart,
            route: "/statistics",
            permission: PERMISSION_KEYS.WAGON_SCALE_DASHBOARD,
          },
          {
            title: t("station.plural"),
            icon: IconMap,
            route: "/stations",
            permission: PERMISSION_KEYS.LIST_WAGON_SCALES
          },
          {
            title: t("wagon.plural"),
            icon: IconWagon,
            route: "/wagons",
            permission: PERMISSION_KEYS.LIST_WAGON_SCALES
          },
          {
            title: t("wagon.listAll"),
            icon: IconList,
            route: "/all-wagons",
            permission: PERMISSION_KEYS.LIST_WAGON_SCALES
          },
          {
            title: t("scales.customsByBorder"),
            icon: OfficeBuilding,
            route: "/by-border",
            permission: PERMISSION_KEYS.LIST_CUSTOM_WAGON_SCALES
          },
          {
            title: t("scales.customs"),
            icon: IconWagon,
            route: "/customs",
            permission: PERMISSION_KEYS.LIST_CUSTOM_WAGON_SCALES
          },
        ]
      }
    ],
    camera: [
      {
        name: "camera",
        route: "/camera",
        isActive: true,
        routes: [
          {
            title: t("statistic.title"),
            pageTitle: t("camera.statistics"),
            icon: IconBarChart,
            route: "/statistics",
            permission: PERMISSION_KEYS.WAGON_SESSION_DASHBOARD
          },
          {
            title: t("wagons.title"),
            icon: IconMap,
            route: "/wagons",
            permission: PERMISSION_KEYS.LIST_WAGON_SESSIONS
          },
          {
            title: t("allWagons.title"),
            icon: IconWagon,
            route: "/all-wagons",
            permission: PERMISSION_KEYS.LIST_WAGON_SESSIONS
          }
        ]
      }
    ],
    helmet: [
      {
        name: "helmet",
        route: "/helmet",
        isActive: true,
        routes: [
          {
            title: t("statistic.title"),
            pageTitle: t("camera.statistics"),
            icon: IconBarChart,
            route: "/statistics",
            // #FIX missing permission key
            permission: PERMISSION_KEYS.LIST_WAGON_SCALES
          },
          {
            title: t("camera.list"),
            icon: IconMap,
            route: "/cameras",
            permission: PERMISSION_KEYS.VIEW_CAMERAS
          },
          {
            title: t("camera.companies"),
            icon: IconWagon,
            route: "/companies",
            permission: PERMISSION_KEYS.VIEW_CAMERAS
          }
        ]
      }
    ],
    app: [
      {
        name: "app",
        route: "/app",
        isActive: true,
        routes: [
          {
            title: t("app.users"),
            pageTitle: t("app.users"),
            icon: IconBarChart,
            route: "/users",
            permission: PERMISSION_KEYS.LIST_ACCOUNTS
          },
          {
            title: t("app.roles"),
            pageTitle: t("app.roles"),
            icon: IconMap,
            route: "/roles",
            permission: PERMISSION_KEYS.LIST_ROLES
          }
        ]
      }
    ],
    chat: [
      {
        name: "chat",
        route: "/chat",
        isActive: true,
        routes: [
          {
            title: t("chat.title"),
            pageTitle: t("chat.title"),
            icon: IconMessage,
            route: "/new-chat",
            // #FIX missing permission key
            permission: PERMISSION_KEYS.LIST_WAGON_SCALES
          },
        ]
      }
    ],
  };
};
