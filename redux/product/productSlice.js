import { createSlice } from "@reduxjs/toolkit";
import { all } from "../../Utils/constants";

const initialState = {
  favProducts: [],
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleFavProduct: (state, { payload }) => {
      const favProducts = state.favProducts;
      if (!favProducts.includes(payload)) {
        state.favProducts.push(payload);
      } else {
        state.favProducts = state.favProducts.filter(
          (item) => item !== payload
        );
      }
    },
  },
});

export const { toggleFavProduct } = productsSlice.actions;

export default productsSlice.reducer;
