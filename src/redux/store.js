import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authSliceReducer from "./features/auth/authSlice";
export const store = configureStore({
  reducer:{
    [apiSlice.reducerPath]:apiSlice.reducer,
    auth: authSliceReducer,
  },
  devTools:import.meta.env.DEV,
  middleware:(getDefaultMiddlewares)=>
    getDefaultMiddlewares().concat(apiSlice.middleware)
})