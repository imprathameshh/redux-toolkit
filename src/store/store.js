import { configureStore, createReducer } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    // cart: cartSlice,
    cart: cartReducer,
  },
});

export default store;
