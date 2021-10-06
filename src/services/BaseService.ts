import axios from "axios";
import { logout } from "stores/AccessTokenStore";

type HttpClientConfig = {
  baseURL: string;
  useAppToken?: boolean;
};

export const getHttpClient = ({
  baseURL,
  useAppToken = true,
}: HttpClientConfig) => {
  const http = axios.create({ baseURL });

  http.interceptors.request.use((request) => {
    if (useAppToken && request.headers) {
      request.headers["Authorization"] = `Bearer`;
    }

    return request;
  });

  http.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error.response && [401, 403].includes(error.response.status)) {
        logout();
      }

      return Promise.reject(error);
    }
  );

  return http;
};
