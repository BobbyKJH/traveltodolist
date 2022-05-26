import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counterReducer";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
