import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./reducer/slices/loginSlice";
import { authApi } from "./services/authApi";
import { authSlice } from "./reducer/slices/authSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice.reducer,
    login: loginSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
