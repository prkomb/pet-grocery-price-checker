import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const products = await axios({ url: "/api/products", method: "GET" });

      console.log(products.data);

      const categories = products.data.map((product) => {
        return product.title;
      });

      const currentProducts = products.data;

      const returnableObject = { categories, currentProducts };

      return returnableObject;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
