import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { appConfig } from "../config/appConfig";
import { resetAuth, setToken, setUser } from "../reducer/slices/authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.apiUrl,
    jsonContentType: "application/json",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
      onQueryStarted(_queryParam, { dispatch, queryFulfilled }) {
        queryFulfilled.then(({ data }) => {
          dispatch(setToken(data));
        });
      },
    }),
    getUser: builder.query({
      query: (token) => ({
        url: "/auth/me",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      onQueryStarted: (_queryParam, { dispatch, queryFulfilled }) => {
        queryFulfilled
          .then(({ data }) => {
            dispatch(setUser(data));
          })
          .catch(() => {
            dispatch(resetAuth());
          });
      },
    }),
    logout: builder.mutation({
      query: (token) => ({
        url: "/auth/logout",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      onQueryStarted(_queryParam, { dispatch, queryFulfilled }) {
        queryFulfilled.then(() => {
          dispatch(resetAuth());
        });
      },
    }),
  }),
});

export const { useLoginMutation, useGetUserQuery, useLogoutMutation } = authApi;
