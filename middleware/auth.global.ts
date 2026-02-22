import { platformRoutes } from "@/constants";
import { routesList } from "@/navigation/list";
import { usePermissionStore } from "@/store/permissionsStore";

export default defineNuxtRouteMiddleware((to) => {
  return
  const accessToken = useCookie("access_token").value;

  if (!accessToken && to.path !== "/auth") {
    return navigateTo("/auth");
  }

  if (to.path === "/auth") return;

  const systemsCookie = useCookie("systems").value;
  const systems = Number(systemsCookie ?? 0);

  const routeName = to.name?.toString() ?? "";

  const matched = platformRoutes.find(p => p.name === routeName);

  if (!matched) return;

  // const hasPermission = (systems & matched.permission) === matched.permission;

  // if (!hasPermission) {
  //   return navigateTo("/404");
  // }

  // #TODO enable detailed permission checking, for every single page
  // routesList.forEach(route => {
  //   if (route.name === routeName && route.permission) {
  //     const userPermissionsCookie = useCookie("permissions").value;
  //     const userPermissions: string[] = userPermissionsCookie ? JSON.parse(userPermissionsCookie) : [];

  //     if (!userPermissions.includes(route.permission)) {
  //       return navigateTo("/404");
  //     }
  //   }
  // });
});