import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: string = null;

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state = action.payload;
    },
    clear: (state) => {
      state = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set, clear } = tokenSlice.actions;

export default tokenSlice.reducer;
