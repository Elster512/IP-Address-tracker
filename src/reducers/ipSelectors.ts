import { RootState } from "../store";

export const selectIpData = (state: RootState) => {
  return state.ip;
};
