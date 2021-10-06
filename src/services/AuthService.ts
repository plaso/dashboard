import { getHttpClient } from "./BaseService";

const API_URL = process.env.REACT_APP_API_URL as string;

const http = getHttpClient({ baseURL: API_URL, useAppToken: false });

export const login = (code: string): Promise<{ access_token: string }> => {
  return http.post("/auth/cb", { code });
};
