import { createAsyncThunk } from '@reduxjs/toolkit';

import { getVehicle } from '@/services/vehicles';

export const fetchVehicleDetail = createAsyncThunk(
	'vehicle/detail',
	async (id: string) => {
		try {
		const response = await getVehicle(id);

		return response;
		} catch (err) {
			return Promise.reject(err);
		}
	},
)