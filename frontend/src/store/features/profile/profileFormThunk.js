import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";

export const saveProfile = createAsyncThunk(
  "profile/saveProfile",
  async (profileData) => {
    try {
      // console.log(profileData);
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

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (uid) => {
    try {
      const db = getFirestore();
      const userRef = doc(db, "users", uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("Profile not found");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
