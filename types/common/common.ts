interface basePagination {
  page: number;
  size: number;
}

interface Language {
  en: "",
  kril: "",
  ru: "",
  uz: ""
}

interface TError {
  code?: string;
  message?: string;
}

type Mode = "create" | "edit" | "view";

// permissions.ts

export const PERMISSION_KEYS = {
  CREATE_ROLE: 'create_role',
  UPDATE_ROLE_PERMISSIONS: 'update_role_permissions',
  DELETE_ROLE: 'delete_role',
  ASSIGN_ROLE_TO_ACCOUNT: 'assign_role_to_account',
  LIST_ROLES: 'list_roles',
  VIEW_ROLE: 'view_role',

  CREATE_ACCOUNT: 'create_account',
  LIST_ACCOUNTS: 'list_accounts',
  GET_ACCOUNT_BY_ID: 'get_account_by_id',
  DELETE_ACCOUNT: 'delete_account',

  ATTACHMENT_UPLOAD: 'attachment_upload',
  ATTACHMENT_LIST: 'attachment_list',
  ATTACHMENT_ONE: 'attachment_one',
  ATTACHMENT_DELETE: 'attachment_delete',

  LIST_WAGON_SESSIONS: 'list_wagon_sessions',
  GET_WAGON_SESSION_BY_ID: 'get_wagon_session_by_id',
  CREATE_WAGON_SESSION: 'create_wagon_session',
  DELETE_WAGON_SESSION: 'delete_wagon_session',
  SEARCH_WAGON_SESSION_BY_NUMBER: 'search_wagon_session_by_number',
  UPDATE_WAGON_NUMBER: 'update_wagon_number',
  DELETE_WAGON_ITEM: 'delete_wagon_item',

  CREATE_WAGON_SCALE: 'create_wagon_scale',
  LIST_WAGON_SCALES: 'list_wagon_scales',
  GET_WAGON_SCALE_BY_ID: 'get_wagon_scale_by_id',
  UPDATE_WAGON_SCALE: 'update_wagon_scale',
  DELETE_WAGON_SCALE: 'delete_wagon_scale',
  MONTHLY_WAGON_SCALE: 'monthly_wagon_scale',
  LIST_CUSTOM_WAGON_SCALES: 'list_custom_wagon_scales',

  CREATE_WAGON: 'create_wagon',
  UPDATE_ROLE: 'update_role',
  UPDATE_ACCOUNT: 'update_account',

  VIEW_CAMERAS: 'view_cameras',
  UPLOAD_VIOLATION: 'upload_violation',

  WAGON_SCALE_DASHBOARD: 'wagon_scale_dashboard',
  GET_WAGON_SCALE_PDF: 'get_wagon_scale_pdf',
  WAGON_SESSION_DASHBOARD: 'wagon_session_dashboard',
} as const;

export type PermissionKey = (typeof PERMISSION_KEYS)[keyof typeof PERMISSION_KEYS];

export type TableColumn<Row extends Record<string, any>> =
  | {
    prop: keyof Row & string
    label: string
    width?: number
    custom?: false | undefined
  }
  | {
    prop: string
    label: string
    width?: number
    custom: true
  }

export type TableColumns<Row extends Record<string, any>> = TableColumn<Row>[]


export { type basePagination, type Language, type TError, type Mode };