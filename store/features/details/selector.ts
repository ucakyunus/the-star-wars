import { RootState } from '@/store/types';

const getVehicleDetail = (state: RootState) => state.details.vehicleDetail;
const getSpeciesDetail = (state: RootState) => state.details.speciesDetail;
const getLoading = (state: RootState) => state.details.pending;

export {
  getVehicleDetail,
  getSpeciesDetail,
  getLoading
}