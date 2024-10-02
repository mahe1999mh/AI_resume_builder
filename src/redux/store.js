// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { resumeApi } from "./resume/resumeApi";
import styleSlice from "./resume/styleSlice";

export const store = configureStore({
  reducer: {
    styles: styleSlice,
    [resumeApi.reducerPath]: resumeApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(resumeApi.middleware),
});
