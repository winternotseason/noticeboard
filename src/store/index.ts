import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import userSlice from "./user";

const store = configureStore({
  reducer: {
    user : userSlice.reducer,
    auth : authSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

