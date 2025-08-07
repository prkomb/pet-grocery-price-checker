import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await axios({
        method: "POST",
        url: "/api/login",
        data: { email, password },
      });
      localStorage.setItem("token", userCredential.data.jwtToken);
      return userCredential.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Login error");
    }
  }
);
