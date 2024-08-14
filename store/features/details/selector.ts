import { RootState } from '@/store/types';

const getVehicleDetail = (state: RootState) => state.details.vehicleDetail;

export {
  getVehicleDetail
}