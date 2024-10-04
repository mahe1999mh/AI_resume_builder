// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { resumeApi } from "./resume/resumeApi";
import styleSlice from "./resume/styleSlice";
import resumeSlice from './resume/resumeSlice'

export const store = configureStore({
  reducer: {
    styles: styleSlice,
    resume: resumeSlice,
    [resumeApi.reducerPath]: resumeApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(resumeApi.middleware),
});
