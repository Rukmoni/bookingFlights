import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import cart from "./slices/cartSlice";
import theme from "./slices/themeSlice";

export const store = configureStore({
  reducer: { auth, theme, cart },
  // middleware: (getDefault) => getDefault(), // extend here later if needed
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
