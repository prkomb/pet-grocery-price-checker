import { createSlice } from "@reduxjs/toolkit";
import { forgotPassword } from "./forgotPasswordThunk";

const initialState = {
  email: "",
  error: "",
};

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      return { ...state, email: action.payload };
    });
  },
});

export default forgotPasswordSlice.reducer;
