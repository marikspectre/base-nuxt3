import { PERMISSION_KEYS } from "@/types";

export const routesList: { name: string; permission?: string }[] = [
  { name: "index" },

  { name: "auth" },
  { name: "profile" },

  { name: "helmet-statistics", permission: PERMISSION_KEYS.VIEW_CAMERAS },
  { name: "helmet-cameras", permission: PERMISSION_KEYS.VIEW_CAMERAS },
  { name: "helmet-companies", permission: PERMISSION_KEYS.VIEW_CAMERAS },
  { name: "helmet-companies-id", permission: PERMISSION_KEYS.VIEW_CAMERAS },

  { name: "app-roles", permission: PERMISSION_KEYS.LIST_ROLES },
  { name: "app-roles-id", permission: PERMISSION_KEYS.LIST_ROLES },
  { name: "app-users", permission: PERMISSION_KEYS.LIST_ACCOUNTS },

  { name: "chat-session", permission: PERMISSION_KEYS.LIST_ACCOUNTS },
  { name: "chat-new-chat", permission: PERMISSION_KEYS.LIST_ACCOUNTS },

  { name: "camera-statistics", permission: PERMISSION_KEYS.WAGON_SESSION_DASHBOARD },
  { name: "camera-wagons", permission: PERMISSION_KEYS.LIST_WAGON_SESSIONS },
  { name: "camera-wagons-id", permission: PERMISSION_KEYS.GET_WAGON_SESSION_BY_ID },
  // #TODO change permission
  { name: "camera-wagons-id-camera_id", permission: PERMISSION_KEYS.GET_WAGON_SESSION_BY_ID },
  // #TODO change permission
  { name: "camera-all-wagons", permission: PERMISSION_KEYS.LIST_WAGON_SESSIONS },
  // #TODO change permission
  { name: "camera-all-wagons-camera_id", permission: PERMISSION_KEYS.LIST_WAGON_SESSIONS },

  { name: "scales-statistics", permission: PERMISSION_KEYS.WAGON_SCALE_DASHBOARD },
  { name: "scales-stations", permission: PERMISSION_KEYS.LIST_WAGON_SCALES },
  { name: "scales-stations-code", permission: PERMISSION_KEYS.LIST_WAGON_SCALES },
  { name: "scales-by-border", permission: PERMISSION_KEYS.LIST_WAGON_SCALES },
  { name: "scales-by-border-code", permission: PERMISSION_KEYS.LIST_WAGON_SCALES },
  { name: "scales-customs", permission: PERMISSION_KEYS.LIST_WAGON_SCALES },
  { name: "scales-wagons", permission: PERMISSION_KEYS.LIST_WAGON_SCALES },
  { name: "scales-all-wagons", permission: PERMISSION_KEYS.LIST_WAGON_SCALES },
];
