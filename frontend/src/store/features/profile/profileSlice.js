import { createSlice } from "@reduxjs/toolkit";
import { saveProfile } from "./profileFormThunk";

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
  },
});

export const { setProfile, getUid } = profileSlice.actions;
export default profileSlice.reducer;
