import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/store/features/login/loginSlice.js";
import profileReducer from "@/store/features/profile/profileSlice.js";
import dummyJsonReducer from "../features/data/dummyJsonSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
    dummyJson: dummyJsonReducer,
  },
});
