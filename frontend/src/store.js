import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./reducer/slices/loginSlice";
import { authApi } from "./services/authApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    login: loginSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
