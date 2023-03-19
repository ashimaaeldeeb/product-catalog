import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import categoryReducer from "./category/categoriesSlice";
import productReducer from "./product/productSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  blacklist: ["category"],
};

const reducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
