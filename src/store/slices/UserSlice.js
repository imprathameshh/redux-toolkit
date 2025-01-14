// FIRST STEP
import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    /* OPERACTION PERFUME HERE */
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      return [];
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions;
