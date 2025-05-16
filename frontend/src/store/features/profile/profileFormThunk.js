import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, setDoc, doc } from "firebase/firestore";

export const saveProfile = createAsyncThunk(
  "profile/saveProfile",
  async (profileData) => {
    try {
      const { uid, name, surname, phone, city, postcode } = profileData;
      const db = getFirestore();
      const userRef = doc(db, "users", uid);
      await setDoc(userRef, { name, phone, city, postcode, surname });
      return profileData;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
);
