import { createAsyncThunk } from '@reduxjs/toolkit';

import { IMeteo } from '../../types/IMeteo';


const fethCity = (city: string): Promise<IMeteo> =>
  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    .then((res) => res.json())
    .then((json) => json);

export const getByCity = createAsyncThunk(
  'city/fetch',
  async (city: string, thunkApi) => {
    try {
      const response = await fethCity(city);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
