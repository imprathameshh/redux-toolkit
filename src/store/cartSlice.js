import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

/* Reducers are functions that help in managing state changes in a Redux application.
They take the current state and an action as input, and based on the action type,
they produce a new state object, thus mutating the state in a controlled and predictable manner. */
