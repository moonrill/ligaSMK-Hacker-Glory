import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import token from "../../utils/token";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: Cookies.get("access_token"),
  },
  reducers: {
    setToken: (state, action) => {
      const { access_token, expires_in } = action.payload;
      state.token = access_token;
      // set token in cookies
      token.set(access_token, expires_in);
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetAuth: (state) => {
      token.remove();
      state.token = null;
      state.user = null;
    }
  },
});

export const {setToken, setUser, resetAuth} = authSlice.actions;