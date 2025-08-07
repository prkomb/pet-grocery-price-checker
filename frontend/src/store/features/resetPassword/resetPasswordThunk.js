import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const resetPassword = createAsyncThunk(
  "reset/resetPassword",
  async (data) => {
    try {
      await axios({
        method: "POST",
        url: "/api/resetPassword",
        data,
      });
    } catch {
      // Error handling
    }
  }
);
