import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./dummyJsonThunk";

const initialState = {
  products: null,
  error: null,
};

export const dummyJsonSlice = createSlice({
  name: "dummyJson",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
      };
    });
  },
});

export default dummyJsonSlice.reducer;
