import config from "@/config";
import {
  ApiClientConfig,
  ApiResponse,
  PaginatedResponse,
  PaginationParams,
  RandomUserApiResponse,
  RelativeUrl,
} from "@/types";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: config.apiBaseUrl,
      timeout: config.requestTimeout,
    });
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.instance.get<T>(url, config);
  }
}

// Default instance
const apiClient = new ApiClient();

export { apiClient, ApiClient };
export const CanceledError = axios.CanceledError;
