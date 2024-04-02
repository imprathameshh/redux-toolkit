import { configureStore, createReducer } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    // cart: cartSlice,
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
