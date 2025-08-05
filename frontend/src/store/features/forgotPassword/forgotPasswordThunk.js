import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const forgotPassword = createAsyncThunk(
  "forgot/forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    console.log(email);
    try {
      const response = axios({
        method: "POST",
        url: "/api/forgotPassword",
        data: { email },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { forgotPassword };
