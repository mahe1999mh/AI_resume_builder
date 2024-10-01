// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { resumeApi } from "./resume/resumeApi";

export const store = configureStore({
  reducer: {
    [resumeApi.reducerPath]: resumeApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(resumeApi.middleware),
});
