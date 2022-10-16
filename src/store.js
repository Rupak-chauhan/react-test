import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import counterReducer from "./reducers/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: "demo",
      },
    }),
});
