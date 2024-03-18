import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://project-tracker-tpm7.onrender.com/projects",
  }),
  tagTypes: ["projects"],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: ({ searchQuery }) => {
        return {
          url: `/?search=${searchQuery}`,
          method: "GET",
        };
      },
      providesTags: ["projects"],
    }),
    getProjectById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["projects"],
    }),
    addProject: builder.mutation({
      query: (project) => ({
        url: "/add",
        method: "POST",
        body: project,
      }),
      invalidatesTags: ["projects"],
    }),
    editProject: builder.mutation({
      query: ({ id, ...project }) => ({
        url: `/update/${id}`,
        method: "PATCH",
        body: project,
      }),
      invalidatesTags: ["projects"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useAddProjectMutation,
  useEditProjectMutation,
} = projectApi;
