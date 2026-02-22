const error_status_code_list = [400, 403, 404, 409, 422];

const refresh_api = "/api/auth/refresh";

const refresh_ignore_endpoint: string[] = [
  "/api/auth/login",
  "/api/auth/refresh",
];

export default function useConfig() {
  return {
    error_status_code_list,
    refresh_api,
    refresh_ignore_endpoint,
  };
}