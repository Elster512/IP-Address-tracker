import { createAsyncThunk } from "@reduxjs/toolkit";
import { IpData } from "../types/ip";
import { Extra } from "../types/extra";
import { regExpIP } from "../regEx";
import { Error } from "../types/error";
export const loadInitialUser = createAsyncThunk<
  { data: IpData },
  undefined,
  { extra: Extra }
>("ip/loadInitialUser", (_, { extra: { client } }) => {
  return client.get(
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_SFJD6U86PJmu1e3pXvn1DOGMe1rcg"
  );
});

export const loadNewIpData = createAsyncThunk<
  { data: IpData },
  string,
  { extra: Extra; rejectValue: Error }
>("ip/loadNewIpData", (ip, { extra: { client }, rejectWithValue }) => {
  if (ip.match(regExpIP)) {
    return client.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_SFJD6U86PJmu1e3pXvn1DOGMe1rcg&ipAdress=${ip.trim()}`
    );
  } else if (ip !== "0.0.0.0" && ip) {
    return client.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_SFJD6U86PJmu1e3pXvn1DOGMe1rcg&domain=${ip.trim()}`
    );
  } else {
    return rejectWithValue({ message: "error" });
  }
});
