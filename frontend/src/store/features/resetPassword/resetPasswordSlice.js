import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: "",
  newPassword: "",
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default resetPasswordSlice.reducer;
