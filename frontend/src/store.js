import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./reducer/slices/loginSlice";
import { authApi } from "./services/authApi";
import { authSlice } from "./reducer/slices/authSlice";
import { categoryApi } from "./services/categoryApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    auth: authSlice.reducer,
    login: loginSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, categoryApi.middleware),
});
