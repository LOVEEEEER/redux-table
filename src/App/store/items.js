import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    items: [
      {
        id: 1,
        name: "Pyshky.net",
        status: "success",
        buy_status: true,
        type: "TRST",
        conditions: "x2,6 months",
        volume: 120000,
        roi: 4,
        free: 20,
        hedge: 20,
      },
      {
        id: 2,
        name: "NFT-Flowershop",
        status: "warning",
        buy_status: false,
        type: "THT",
        conditions: "x4,2 years",
        volume: 80000,
        roi: 23,
        free: 12,
        hedge: 0,
      },
      {
        id: 3,
        name: "Tokenhunt.club",
        status: "success",
        buy_status: true,
        type: "TRST",
        conditions: "x2,1 years",
        volume: 120000,
        roi: 23,
        free: 2,
        hedge: 20,
      },
      {
        id: 4,
        name: "Web3 P2P University",
        status: "danger",
        buy_status: false,
        type: "TRST",
        conditions: "x2,1 years",
        volume: 200000,
        roi: 6,
        free: 1,
        hedge: 0,
      },
    ],
  },
  reducers: {
    setStatus(state, action) {
      state =
        state.items[
          state.items.findIndex((item) => item.id === action.payload)
        ];

      state.buy_status = state.buy_status ? false : true;
      state.status =
        state.status === "success" || state.status === "danger"
          ? state.status === "success"
            ? "danger"
            : "success"
          : "warning";
      if (state.status === "warning") {
        toast.error(`Warning! ${state.name} in pending `);
      }
    },
  },
});

export default toolkitSlice.reducer;
export const { setStatus } = toolkitSlice.actions;
