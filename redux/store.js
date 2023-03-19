import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categoriesSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
