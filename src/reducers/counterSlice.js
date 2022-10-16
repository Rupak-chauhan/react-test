import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const interfareCounter = createAsyncThunk(
  "counterSlice/interfareCounter",
  async (params, { dispatch, getState }) => {
    console.log("Inside interfacreCounter =>", params, getState());
    dispatch(increment());
  }
);

export const counterSlice = createSlice({
  name: "counterslice",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log("PAyload= >", action.payload);
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
