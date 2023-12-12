import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import token from "../../utils/token";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem('user')),
    token: Cookies.get("access_token"),
  },
  reducers: {
    setToken: (state, action) => {
      const { access_token, expires_in } = action.payload;
      // set token in cookies
      token.set(access_token, expires_in);
    },
    setUser: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    resetAuth: () => {
      localStorage.removeItem('user');
      token.remove();
    }
  },
});

export const {setToken, setUser, resetAuth} = authSlice.actions;