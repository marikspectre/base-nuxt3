export type LangCode = "uz" | "en" | "ru" | "kril" | `${string}`;

export enum LangCodeEnum {
  UZ = "uz",
  EN = "en",
  RU = "ru",
  KRIL = "kril"
}

export interface NameItem {
  id?: number;
  lang: LangCode;
  data: string;
}

export type TNames = NameItem[];
