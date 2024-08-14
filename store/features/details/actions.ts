import { createAsyncThunk } from '@reduxjs/toolkit';

import { getVehicle } from '@/services/vehicles';
import { getSpecie } from "@/services/species";

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

export const fetchSpecieDetail = createAsyncThunk(
	'specie/detail',
	async (id: string) => {
		try {
			const response = await getSpecie(id);
			
			return response;
		} catch (err) {
			return Promise.reject(err);
		}
	},
)