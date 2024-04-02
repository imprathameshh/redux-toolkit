import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    /* METHOD - 1 THIING */
    setProduct(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    /* METHOD - 1 THING */
  },

  /* METHOD - 2 THING */
  /* extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
   }, */
  /* METHOD - 2 THING */
});

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

//THUNK

/* METHOD - 2 START */

// export const fetchProducts = createAsyncThunk("products/fetch", async () => {
//   const apiFetch = await fetch("https://fakestoreapi.com/products");
//   const data = await apiFetch.json();
//   return data;
// });

/* METHOD - 2 END */

/* METHOD - 1 START*/
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    // LOADING
    dispatch(setStatus(STATUSES.LOADING));
    // REQUESR
    try {
      const apiFetch = await fetch("https://fakestoreapi.com/products");
      const data = await apiFetch.json();
      dispatch(setProduct(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
/* METHOD - 1 END*/
