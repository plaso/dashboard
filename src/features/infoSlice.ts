import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { getUserInfo } from "services/InfoService";

export type InfoResponse = {
  avatar_url?: string;
  followers?: number;
  following?: number;
  public_repos?: number;
  public_gists?: number;
  html_url?: string;
  repos_url?: string;
};

type InitialState = {
  info: InfoResponse;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
};

const initialState: InitialState = {
  info: {},
  isFetching: false,
  isSuccess: false,
  isError: false,
};

export const fetchInfo = createAsyncThunk("info/fetch", async () => {
  const info = await getUserInfo();

  return info;
});

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInfo.fulfilled, (state, action) => {
      state.info = action.payload;
      state.isFetching = false;
      state.isSuccess = true;
    });

    builder.addCase(fetchInfo.pending, (state, action) => {
      state.isFetching = true;
    });
  },
});

export const { clearState } = infoSlice.actions;

export const selectInfo = (state: RootState) => state.info;

export default infoSlice.reducer;
