import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../../../helpers/auth/auth";
import { loginUser } from "./loginThunk";
import { logout } from "../logout";
import { saveUser } from "../../../helpers/localStorage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
console.log(auth);

const initialState = {
  user: null,
  token: null,
  loading: null,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,

  extraReducers(builder) {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("Done");
        console.log(action.payload);
        saveUser(action.payload);
        return { ...state, user: action.payload };
      })
      .addCase(loginUser.rejected, (state, action) => {
        // console.log("error");
        return { ...state, error: action.payload };
      })
      .addCase(logout.fulfilled, (state) => {
        console.log("logout");
        localStorage.removeItem("user");
        return { ...state, user: null };
      });
  },
});

export default loginSlice.reducer;
