// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { userApiSlice } from "./slices/login";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, userApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
