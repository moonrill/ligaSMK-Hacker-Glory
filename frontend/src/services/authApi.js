import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { appConfig } from "../config/appConfig";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.apiUrl,
    jsonContentType: "application/json",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ credentials, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: {
          credentials,
          password,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
