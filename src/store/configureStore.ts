import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { RootState } from ".";
import { combinedReducer } from "./reducers";

/**
 * Configure store
 * @see https://redux.js.org/recipes/usage-with-typescript#typing-configurestore
 */
export const store = configureStore({
  reducer: combinedReducer,
  middleware: [...getDefaultMiddleware<RootState>()],
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
