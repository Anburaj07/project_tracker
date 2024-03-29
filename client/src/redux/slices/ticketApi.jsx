import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ticketApi = createApi({
  reducerPath: "ticketApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://project-tracker-tpm7.onrender.com/tickets",
  }),
  tagTypes: ["tickets"],
  endpoints: (builder) => ({
    getTickets: builder.query({
      query: ({ searchQuery }) => {
        return {
          url: `/?search=${searchQuery}`,
          method: "GET",
        };
      },
      providesTags: ["tickets"],
    }),
    getTicketById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["tickets"],
    }),
    addTicket: builder.mutation({
      query: (task) => ({
        url: "/add",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["tickets"],
    }),
    editTicket: builder.mutation({
      query: ({ id, ...ticket }) => ({
        url: `/update/${id}`,
        method: "PATCH",
        body: ticket,
      }),
      invalidatesTags: ["tickets"],
    }),
    deleteTicket: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tickets"],
    }),
  }),
});

export const {
  useGetTicketsQuery,
  useGetTicketByIdQuery,
  useAddTicketMutation,
  useEditTicketMutation,
  useDeleteTicketMutation,
} = ticketApi;
