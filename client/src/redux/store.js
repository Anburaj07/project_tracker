import { configureStore } from "@reduxjs/toolkit";
import { projectApi } from "./slices/projectApi";
import { taskApi } from "./slices/taskApi";
import { ticketApi } from "./slices/ticketApi";

const store = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
    [ticketApi.reducerPath]: ticketApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      projectApi.middleware,
      taskApi.middleware,
      ticketApi.middleware
    ),
});

export default store;
