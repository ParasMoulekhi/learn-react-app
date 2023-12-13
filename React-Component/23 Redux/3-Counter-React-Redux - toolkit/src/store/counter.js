import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increament: (state) => {
      state.counterVal++;
    },
    decreament: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += +action.payload;
    },
    substract: (state, action) => {
      state.counterVal -= action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
