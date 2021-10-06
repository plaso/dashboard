const ACCESS_TOKEN = "access_token";

export const getAccessToken = () => window.localStorage.getItem(ACCESS_TOKEN);

export const setAccessToken = (value: string) =>
  window.localStorage.setItem(ACCESS_TOKEN, value);

export const logout = () => {
  window.localStorage.removeItem(ACCESS_TOKEN);
  window.location.assign("/");
};
