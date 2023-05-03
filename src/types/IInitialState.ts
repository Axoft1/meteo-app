import { IMeteo, IWeather } from './IMeteo';

export interface IInitialStateCity {
  isLoading: boolean;
  meteoCity: IMeteo;
  error: null | string;
}
export interface IInitialStateMeteo {
  isLoading: boolean;
  weatherCity: IWeather;
  error: null | string;
}
