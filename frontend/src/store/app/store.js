import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/store/features/login/loginSlice.js";
import profileReducer from "@/store/features/profile/profileSlice.js";
import dummyJsonReducer from "../features/data/dummyJsonSlice";
import commentsReducer from "@/store/features/comments/commentsSlice.js";
import forgotPasswordReducer from "../features/forgotPassword/forgotPasswordSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
    dummyJson: dummyJsonReducer,
    comments: commentsReducer,
    forgotPassword: forgotPasswordReducer,
  },
});
