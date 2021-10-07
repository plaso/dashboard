import { InfoResponse } from "features/infoSlice";
import { getHttpClient } from "./BaseService";

const API_URL = process.env.REACT_APP_API_URL as string;

const http = getHttpClient({ baseURL: API_URL });

export const getUserInfo = (): Promise<InfoResponse> => {
  return http.get("/users/me");
};
