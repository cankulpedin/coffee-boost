import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./slices/commonSlice";

const reduxStore = configureStore({
  reducer: {
    common: commonReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
