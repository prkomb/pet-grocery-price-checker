import { createSlice } from "@reduxjs/toolkit";
import registerUser from "./registerThunk";

const initialState = {
  user: null,
  error: null,
  loading: null,
};

const register = createSlice({
  name: "register",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log("here");

      return { ...state, user: action.payload };
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      console.log("Here");

      return {
        ...state,
        error: action.payload,
      };
    });
  },
});

export default register.reducer;
