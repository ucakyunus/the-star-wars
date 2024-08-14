import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import {fetchSpecieDetail, fetchVehicleDetail} from "@/store/features/details/actions";
import type { IVehicleDetail } from "@/types/vehicle";
import { ISpecieDetail } from "@/types/specie";

interface IDetailState {
  vehicleDetail: IVehicleDetail | null;
  speciesDetail: ISpecieDetail | null;
  pending: boolean;
  error: boolean;
}

const initialState: IDetailState = {
  vehicleDetail: null,
  speciesDetail: null,
  pending: true,
  error: false,
};

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
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
    .addCase(fetchSpecieDetail.pending, (state) => {
      state.pending = true;
      state.error = false;
    })
    .addCase(fetchSpecieDetail.fulfilled, (state, action: PayloadAction<ISpecieDetail>) => {
      state.pending = false;
      state.error = false;
      state.speciesDetail = action.payload;
    })
    .addCase(fetchSpecieDetail.rejected, (state) => {
      state.error = true;
      state.pending = false;
    });
  }
});

export const detailsReducer = detailsSlice.reducer;