import { AxiosRequestConfig } from "axios";

interface ApiCall extends AxiosRequestConfig {
  callBack?: () => void;
}

interface ApiResponse {
  ok: boolean;
  result: any;
  error: Error | undefined;
}

export type { ApiCall, ApiResponse };
