import { configureStore } from "@reduxjs/toolkit";
import exampleSlice, { exampleInitialState } from "./slices/exampleSlice";

export const initialState = {
  example: exampleInitialState
};

const createStore = (preloadedState: any = initialState) =>
  configureStore({
    reducer: {
      example: exampleSlice
    },
    preloadedState
  });

type ConfiguredStore = ReturnType<typeof createStore>;
type StoreGetState = ConfiguredStore["getState"];
export type RootState = ReturnType<StoreGetState>;
export type AppDispatch = ConfiguredStore["dispatch"];

export default createStore;
