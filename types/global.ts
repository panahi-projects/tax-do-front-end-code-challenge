export type EmailString = `${string}@${string}.${string}`;
export type PhoneString = `+${number}` | `${number}`;
export type AbsoluteUrl = `http${"s" | ""}://${string}`;
export type RelativeUrl = `/${string}`;
export type UrlString = AbsoluteUrl | RelativeUrl;

export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
}

export interface ApiClientConfig {
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface PaginationParams {
  page?: number;
  pageSize?: number;
  [key: string]: any;
}
