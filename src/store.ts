import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";

const store = configureStore({
  reducer: {},
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

export type AppDispatch = ReturnType<typeof store.dispatch>;
export type RootState = typeof store.getState;
