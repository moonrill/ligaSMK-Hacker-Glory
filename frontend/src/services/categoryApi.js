import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { appConfig } from "../config/appConfig";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.apiUrl,
    jsonContentType: "application/json",
  }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: (
        withMading = false,
        orderBy = "name",
        orderDirection = "asc"
      ) => ({
        url: `/category?withMading=${withMading}&orderBy=${orderBy}&orderDirection=${orderDirection}`,
        method: "GET",
      }),
      providesTags: [{ type: "Category", id: "LIST" }],
    }),
    createCategory: builder.mutation({
      query: ({token, data}) => {
        return {
          url: "/category",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: data,
        };
      },
      invalidatesTags: (_result, error) =>
        error ? [] : [{ type: "Category", id: "LIST" }],
    }),
  }),
});

export const { useGetAllCategoryQuery, useCreateCategoryMutation } =
  categoryApi;
