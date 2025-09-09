import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsThunk";
import { original, current } from "immer";

// 👉 "asc" (ascending) = Low → High
// 👉 "desc" (descending) = High → Low

const initialState = {
  products: [],
  categories: [],
  categoryProducts: [],
  sortOrder: "asc",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsList(state, action) {
      const originalState = original(state.products);

      const currentCategory = originalState.find(
        (category) => category.title == action.payload
      );

      return { ...state, categoryProducts: currentCategory.products };
    },

    getSortedProducts(state, action) {
      const order = action.payload;

      if (order === "desc") {
        return {
          ...state,
          sortOrder: order,
          categoryProducts: [...state.categoryProducts].toSorted(
            (firstProduct, secondProduct) =>
              parseFloat(secondProduct.price) - parseFloat(firstProduct.price) // дорогие → дешёвые
          ),
        };
      }

      if (order === "asc") {
        return {
          ...state,
          sortOrder: order,
          categoryProducts: [...state.categoryProducts].toSorted(
            (firstProduct, secondProduct) =>
              parseFloat(firstProduct.price) - parseFloat(secondProduct.price) // дешёвые → дорогие
          ),
        };
      }
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

export const { getProductsList, getSortedProducts } = productsSlice.actions;
export default productsSlice.reducer;
