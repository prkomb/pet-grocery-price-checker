import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsThunk";

const initialState = {
  products: {},
  categories: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      const { currentProducts, categories } = action.payload;

      return {
        ...state,
        products: currentProducts,
        categories: categories,
      };
    });
  },
});

export default productsSlice.reducer;
