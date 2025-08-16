import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsThunk";
import { original, current } from "immer";

const initialState = {
  products: [],
  categories: [],
  categoryProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsList(state, action) {
      console.log(action.payload);
      const originalState = original(state.products);

      const currentCategory = originalState.find(
        (category) => category.title == action.payload
      );

      return { ...state, categoryProducts: currentCategory.products };
    },
  },
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

export const { getProductsList } = productsSlice.actions;
export default productsSlice.reducer;
