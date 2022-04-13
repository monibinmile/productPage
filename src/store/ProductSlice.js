import { createSlice } from "@reduxjs/toolkit";
import data from "../HomeScreen/ProductData";

const initialState = {
  AllProducts: data,
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    productList: (state, action) => {
      const { type, price } = action.payload;
      console.log(data);
      let allProducts = [];
      if (type !== "") {
         allProducts = data.filter(
          (product) =>
            product.type === type &&
            product.price > price[0] &&
            product.price < price[1]
        );
      } else {
         allProducts = data.filter(
          (product) => product.price > price[0] && product.price < price[1]
        );
      }
      state.AllProducts = allProducts;
    },
  },
});

export const { productList } = productSlice.actions;

export default productSlice.reducer;
