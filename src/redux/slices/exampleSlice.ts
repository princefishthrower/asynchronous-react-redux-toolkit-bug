import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExampleState {
  myCoolBoolean: boolean;
}

export const exampleInitialState: ExampleState = {
  myCoolBoolean: false
};

export const exampleSlice = createSlice({
  name: "example",
  initialState: exampleInitialState,
  reducers: {
    setMyCoolBoolean: (state, action: PayloadAction<boolean>) => {
      state.myCoolBoolean = action.payload;
    }
  }
});

export const { setMyCoolBoolean } = exampleSlice.actions;

export default exampleSlice.reducer;
