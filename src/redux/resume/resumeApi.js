// redux/resume/resumeApi.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

export const resumeApi = createApi({
  reducerPath: "resumeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apis-eta-smoky.vercel.app/api/",
    prepareHeaders: headers => {
      headers.set("Authorization", `Bearer ${API_KEY}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    // Define endpoints
    createResume: builder.mutation({
      query: data => ({
        url: "/user-resumes",
        method: "POST",
        body: data,
      }),
    }),
    getUserResumes: builder.query({
      query: userEmail => `/user-resumes/${userEmail}`,
    }),
    updateResumeDetail: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user-resumes/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    getResumeById: builder.query({
      query: id => `/user-resumes/getById/${id}`,
    }),
    deleteResumeById: builder.mutation({
      query: id => ({
        url: `/user-resumes/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateResumeMutation,
  useGetUserResumesQuery,
  useUpdateResumeDetailMutation,
  useGetResumeByIdQuery,
  useDeleteResumeByIdMutation,
} = resumeApi;