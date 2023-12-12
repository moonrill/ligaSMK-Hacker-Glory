import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { appConfig } from "../config/appConfig";
import { setUser } from "../reducer/slices/authSlice";

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
        queryFulfilled.then(({ data: { access_token } }) => {
          // Set user in state
          dispatch(authApi.endpoints.getUser.initiate(access_token))
            .unwrap()
            .then((user) => {
              console.log(user);
              dispatch(setUser(user));
            });
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
    }),
  }),
});

export const { useLoginMutation } = authApi;
