import { IVehicleDetail } from "@/types/vehicle";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchVehicleDetail } from "./actions";

export interface IAuthState {
  vehicleDetail: IVehicleDetail | null;
  pending: boolean;
  error: boolean;
}

const initialState: IAuthState = {
  vehicleDetail: null,
  pending: true,
  error: false,
};

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setVehicleDetail: (state, action: PayloadAction<IVehicleDetail>) => {
      state.vehicleDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchVehicleDetail.pending, (state) => {
      state.pending = true;
      state.error = false;
    })
    .addCase(fetchVehicleDetail.fulfilled, (state, action: PayloadAction<IVehicleDetail>) => {
      state.pending = false;
      state.error = false;
      state.vehicleDetail = action.payload;
    })
    .addCase(fetchVehicleDetail.rejected, (state) => {
      state.error = true;
      state.pending = false;
    })
  }
});

export const detailsReducer = detailsSlice.reducer;
export const { setVehicleDetail } = detailsSlice.actions;