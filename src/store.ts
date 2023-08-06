import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { ipReducer } from "./reducers/ipSlice";

const store = configureStore({
  reducer: {
    ip: ipReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
        },
      },
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
