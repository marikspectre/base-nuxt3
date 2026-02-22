import type { SystemType } from "@/store/main";

interface PlatformRoute {
  title: string;
  route: string;
  name?: string;
  icon: string;
  key: "scales" | "camera" | "helmet" | "app" | "chat";
  permission: SystemType;
}

export type { PlatformRoute };
