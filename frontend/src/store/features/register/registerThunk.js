import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async ({ email, password }) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/auth",
        data: { email, password },
      });

      return response.data;
    } catch (error) {
      console.error(error.response.data.message);
    }
  }
);
