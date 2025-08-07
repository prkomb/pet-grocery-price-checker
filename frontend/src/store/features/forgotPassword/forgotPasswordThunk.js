import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const forgotPassword = createAsyncThunk(
  "forgot/forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/forgotPassword",
        data: { email },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export { forgotPassword };
