import {
  cityNameSuccess,
  forecastDaysFetchSuccess,
  forecastFetchSuccess,
  weatherStatus,
} from '../types/types';


export const forecastSelect = (state: weatherStatus): forecastFetchSuccess | null | undefined =>
  state?.forecastFetch;
export const forecastDaysSelect = (state: weatherStatus): forecastDaysFetchSuccess | null | undefined =>
  state?.forecastDaysFetch;
export const weatherAppLoadSelect = (state: weatherStatus): boolean =>
  state.isWeatherAppLoad;
export const weatherAppErrorSelect = (state: weatherStatus): boolean =>
  state.isWeatherAppError;
export const citySucces = (state: weatherStatus): cityNameSuccess[] | null | undefined =>
  state.cityName;
export const weatherTodayName = (state: weatherStatus): string | null | undefined =>
  state.weatherTodayName;

