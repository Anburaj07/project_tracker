import { configureStore } from "@reduxjs/toolkit";
import { projectApi } from "./slices/projectApi";
import { taskApi } from "./slices/taskApi";

const store = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware, taskApi.middleware),
});

export default store;
