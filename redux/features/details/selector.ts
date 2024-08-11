import { RootState } from '@/redux/types';

const getVehicleDetail = (state: RootState) => state.details.vehicleDetail;

export {
  getVehicleDetail
}