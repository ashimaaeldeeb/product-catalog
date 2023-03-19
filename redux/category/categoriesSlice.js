import { createSlice } from "@reduxjs/toolkit";
import { all } from "../../Utils/constants";

const initialState = {
  selectedCategory: all,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },
  },
});

export const { setSelectedCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
