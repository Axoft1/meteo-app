import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IMeteo } from '../../types/IMeteo';

import { IInitialStateCity } from '../../types/IInitialState';

import { getByCity } from './city.actions';



const initialState: IInitialStateCity = {
  isLoading: false,
  meteoCity: {} as IMeteo,
  error: null,
};

export const citySlise = createSlice({
  name: 'city',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getByCity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getByCity.fulfilled,
        (state, { payload }: PayloadAction<IMeteo>) => {
          state.isLoading = false;
          state.meteoCity = payload;
        }
      )
      .addCase(getByCity.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.meteoCity = {} as IMeteo;
      });
  },
});

export const { actions } = citySlise;
export default citySlise.reducer;
