import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "@/helpers/auth/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async ({ email, password }) => {
    const register = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(register);
  }
);
