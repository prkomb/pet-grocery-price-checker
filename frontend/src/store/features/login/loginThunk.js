import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../helpers/auth/firebaseConfig";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ email, password, navigate }) => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/home");
      localStorage.setItem("token", await userCredential.user.getIdToken());
      return {
        ...userCredential.user,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
