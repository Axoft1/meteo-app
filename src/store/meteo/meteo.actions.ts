import { createAsyncThunk } from '@reduxjs/toolkit';

import { IWeather } from '../../types/IMeteo';


const fethMeteoByCoordinates = (coordinates: {
  latitude: any;
  longitude: any;
}): Promise<IWeather> =>
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=Europe%2FMoscow`
  )
    .then((res) => res.json())
    .then((json) => json);

export const getWeather = createAsyncThunk(
  'weather/fetch',
  async (coordinates: { latitude: any; longitude: any }, thunkApi) => {
    try {
      const response = await fethMeteoByCoordinates(coordinates);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
