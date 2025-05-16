import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/store/features/login/loginSlice.js";
import profileReducer from "@/store/features/profile/profileSlice.js";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
});
