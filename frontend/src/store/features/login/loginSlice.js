import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./loginThunk";
import { logout } from "../logout";
import { saveUser } from "../../../helpers/localStorage";
import { getAuth } from "firebase/auth";

const auth = getAuth();

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
    setUser: (state, action) => {
      const user = {
        uid: action.payload.uid,
        email: action.payload.email,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL,
      };
      return { ...state, user, token: action.payload.uid };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        saveUser(action.payload);
        return { ...state, user: action.payload };
      })
      .addCase(loginUser.rejected, (state, action) => {
        return { ...state, error: action.payload };
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.removeItem("user");
        return { ...state, user: null };
      });
  },
});

export const { setUser } = loginSlice.actions;
export default loginSlice.reducer;

// Connect the validate with the route and check them - task for 20 July
