import { createSlice } from "@reduxjs/toolkit";
import { loadInitialUser, loadNewIpData } from "./ipActions";
import { IpData } from "../types/ip";
import { Error } from "../types/error";

type IpSlice = {
  status: Error;
  ipData: IpData;
};
const initialState: IpSlice = {
  status: {
    code: "",
    message: "",
  },
  ipData: {
    ip: "",
    location: {
      country: "",
      region: "",
      timezone: "",
      city: "",
      lat: 0,
      lng: 0,
      postalCode: "",
    },
    isp: "",
  },
};
const ipSlice = createSlice({
  name: "ip",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadInitialUser.fulfilled, (state, action) => {
        state.ipData = action.payload.data;
      })
      .addCase(loadNewIpData.fulfilled, (state, action) => {
        state.ipData = action.payload.data;
        state.status = {
          code: "",
          message: "",
        };
      })
      .addCase(loadNewIpData.rejected, (state, action) => {
        if (action.error.code && action.error.message) {
          state.status.code = action.error.code;
          state.status.message = action.error.message;
        }
      });
  },
});

export const ipReducer = ipSlice.reducer;
