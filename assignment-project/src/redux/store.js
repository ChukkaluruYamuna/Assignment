import { configureStore } from "@reduxjs/toolkit";
import { uploaderReducer } from "./uploaderReducer";

const store = configureStore({
  reducer: uploaderReducer,
});

export default store;
