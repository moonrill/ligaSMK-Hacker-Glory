import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    credentials: "",
    password: "",
  },
  reducers: {
    setCredentials: (state, action) => {
      state.credentials = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setCredentials, setPassword } = loginSlice.actions;
