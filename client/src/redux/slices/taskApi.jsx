import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/tasks",
  }),
  tagTypes: ["tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/",
      providesTags: ["tasks"],
    }),
    getTasksById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["tasks"],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/add",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["tasks"],
    }),
    editTask: builder.mutation({
      query: ({ id, ...task }) => ({
        url: `/update/${id}`,
        method: "PATCH",
        body: task,
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTasksByIdQuery,
  useAddTaskMutation,
  useEditTaskMutation,
} = taskApi;
