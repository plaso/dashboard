import { getAccessToken, logout } from "./../stores/AccessTokenStore";
import jwt from "jsonwebtoken";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export interface UserState {
  _id: string;
  displayName: string;
  userName: string;
  authenticated: boolean;
}

export const decodeToken = (token: string): UserState | undefined => {
  try {
    const decoded = jwt.decode(token, { complete: true });
    const data = decoded?.payload._doc;

    return {
      _id: data._id,
      displayName: data.displayName,
      userName: data.userName,
      authenticated: true,
    };
  } catch {
    logout();
  }
};

const token = getAccessToken();
const initialState: UserState = (token && decodeToken(token)) || {
  _id: "",
  displayName: "",
  userName: "",
  authenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    decode: (state, action: PayloadAction<string | null>) => {
      if (action.payload) {
        state = Object.assign(state, decodeToken(action.payload));
      }
    },
  },
});

export const { decode } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
