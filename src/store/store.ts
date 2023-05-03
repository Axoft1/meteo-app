import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { meteoSlise } from './meteo/meteo.slise';
import {citySlise} from './city/city.slise';


export const reducers = combineReducers({
  meteo: meteoSlise.reducer,
  city: citySlise.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: reducers,
  });

export type RootState = ReturnType<typeof reducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];