export interface IResults {
  admin1: string;
  admin1_id: number;
  country: string;
  country_code: string;
  country_id: number;
  elevation: number;
  feature_code: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  timezone: string;
}
export interface IMeteo {
  generationtime_ms: number;
  results: IResults[];
}

interface ICurrent_weather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  is_day: number;
}

interface IDaily {
  time: string[];
  weathercode: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: string[];
}
interface IDaily_units {
  time: string;
  weathercode: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  sunrise: string;
}

export interface IWeather {
  current_weather: ICurrent_weather;
  daily: IDaily;
  daily_units: IDaily_units;
  elevation: number;
  generationtime_ms: number;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}
