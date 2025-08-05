import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./loginThunk";

const initialState = {
  user: null,
  token: null,
  loading: null,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser(state, action) {
      return { ...state, user: action };
    },
  },
  extraReducers(builder) {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const currentUser = action.payload.user;
      console.log(currentUser);
      return { ...state, user: currentUser };
    });
  },
});

export const { setUser } = loginSlice.actions;
export default loginSlice.reducer;
