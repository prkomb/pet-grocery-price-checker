import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { emojiMap } from "./emojiArray";
import { Title } from "@mui/icons-material";
import getProductsData from "./helpers/getProducts";

export const getProducts = createAsyncThunk("data/getProducts", async () => {
  try {
    const productsRequest = await axios.get(
      "https://dummyjson.com/products/category/groceries"
    );

    const productsData = await productsRequest.data.products;

    const productsTag = productsData
      .map((data) => {
        return data.tags;
      })
      .map((data) => data.join(", "))
      .reduce((arc, item) => {
        if (arc.includes(item)) {
          return arc;
        }
        arc.push(item.split(", ").at());

        return arc;
      }, [])
      .map((item) => {
        return {
          title: item,
          icon: emojiMap[item].emoji,
          description: emojiMap[item].description,
        };
      });

    const products = productsData.map(getProductsData);
    return { productCategories: productsTag, products };
  } catch (error) {
    throw new Error(error);
  }
});
