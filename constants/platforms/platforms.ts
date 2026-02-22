import { SystemType } from "@/store/main";
import type { PlatformRoute } from "@/types";

const platformRoutes: PlatformRoute[] = [
  {
    title: "platform.scales",
    route: "/scales/statistics",
    name: "scales-stations",
    icon: "IconAI",
    key: "scales",
    permission: SystemType.Scale
  },
  {
    title: "platform.camera",
    route: "/camera/statistics",
    name: "camera-stations",
    icon: "IconCamera",
    key: "camera",
    permission: SystemType.Vision
  },
  {
    title: "platform.helmet",
    route: "/helmet/statistics",
    name: "helmet-stations",
    icon: "IconHelmet",
    key: "helmet",
    permission: SystemType.Helmet
  },
  {
    title: "platform.chat",
    route: "/chat/new-chat",
    name: "chat-new-chat",
    icon: "IconChatBot",
    key: "chat",
    permission: SystemType.Assistant
  },
  {
    title: "platform.app",
    route: "/app/users",
    name: "app-users",
    icon: "IconHelmet",
    key: "app",
    permission: SystemType.Management
  }
];

export { platformRoutes };