import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IWeather } from '../../types/IMeteo';

import { IInitialStateMeteo } from '../../types/IInitialState';

import { getWeather } from './meteo.actions';



const initialState: IInitialStateMeteo = {
  isLoading: false,
  weatherCity: {} as IWeather,
  error: null,
};

export const meteoSlise = createSlice({
  name: 'meteo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getWeather.fulfilled,
        (state, { payload }: PayloadAction<IWeather>) => {
          state.isLoading = false;
          state.weatherCity = payload;
        }
      )
      .addCase(getWeather.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.weatherCity = {} as IWeather;
      });
  },
});

export const { actions } = meteoSlise;
export default meteoSlise.reducer;
