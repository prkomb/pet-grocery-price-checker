import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/store/features/login/loginSlice.js";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
