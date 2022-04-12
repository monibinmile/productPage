import { createSlice } from "@reduxjs/toolkit";
import data  from "../HomeScreen/ProductData";

const initialState = {
  AllProducts: data,
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    productList: (state, action) => {
      const { type } = action.payload;
      console.log(data)
      const filterProducts = data.filter(product => product.type === type);
      state.AllProducts = filterProducts;
    },
  },
});

export const { productList } = productSlice.actions;

export default productSlice.reducer;
