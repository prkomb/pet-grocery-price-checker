import { createSlice } from "@reduxjs/toolkit";
import { saveProfile, getProfile } from "./profileFormThunk";

const initialState = {
  profile: null,
  uid: null,
  error: null,
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getUid: (state, action) => {
      return { ...state, uid: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveProfile.fulfilled, (state, action) => {
      return { ...state, profile: action.payload };
    });
    builder.addCase(saveProfile.rejected, (state, action) => {
      return { ...state, error: action.payload };
    });
    // get profile

    builder.addCase(getProfile.fulfilled, (state, action) => {
      return { ...state, profile: action.payload };
    });
  },
});

export const { setProfile, getUid } = profileSlice.actions;
export default profileSlice.reducer;
