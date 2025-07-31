import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const saveProfile = createAsyncThunk(
  "profile/saveProfile",
  async (profileData) => {
    try {
      const jwtToken = localStorage.getItem("token");

      const request = await axios({
        method: "patch",
        url: "/api/profile",
        data: profileData,
        headers: {
          authorization: `Bearer ${jwtToken}`,
        },
      });
      const response = request.data;
      console.log(response);
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const getProfile = createAsyncThunk("profile/getProfile", async () => {
  const jwtToken = localStorage.getItem("token");
  const request = await axios({
    url: "/api/profile",
    headers: { authorization: `Bearer ${jwtToken}` },
  });
  const response = await request.data;
  return response;
});
