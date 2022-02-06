import {createAction, createSlice} from '@reduxjs/toolkit';
import {weatherStatus} from '../../types/types';
import {
  LOAD_CITY, LOAD_MAIN_WEATHER, LOAD_WEATHER,
} from '../../actions/actions';

const initialState: weatherStatus = {
  weatherFetch: null,
  forecastFetch: null,
  forecastDaysFetch: null,
  cityName: null,
  isWeatherAppLoad: false,
  isWeatherAppError: false,
  weatherTodayName: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather(state, action) {
      state.weatherFetch = action.payload;
      state.isWeatherAppError = false;
      state.isWeatherAppLoad = false;
    },
    setWeatherTodayName(state, action) {
      state.weatherTodayName = null;
      state.weatherTodayName = action.payload;
    },
    setForecasts(state, action) {
      state.forecastFetch = action.payload;
      state.isWeatherAppError = false;
      state.isWeatherAppLoad = false;
    },
    setForecastsDays(state, action) {
      state.forecastDaysFetch = action.payload;
      state.isWeatherAppError = false;
      state.isWeatherAppLoad = false;
    },
    fetchError(state) {
      state.isWeatherAppError = true;
      state.isWeatherAppLoad = false;
    },
    fetchLoaded(state) {
      state.isWeatherAppLoad = true;
      state.isWeatherAppError = false;
    },
    setCityData(state, action) {
      state.cityName = action.payload;
    },
    clearCityData(state) {
      state.cityName = null;
    },
  },
});

export const setName = createAction(LOAD_WEATHER, (city) => ({
  payload: city,
}));
export const setCity = createAction(LOAD_CITY, (city) => ({
  payload: city,
}));
export const setCoordinates = createAction(LOAD_MAIN_WEATHER, (lat, lon) => ({
  payload: {
    lat: lat,
    lon: lon,
  },
}));
export const {setWeatherTodayName, setWeather, setForecasts, setForecastsDays, fetchLoaded, fetchError, setCityData, clearCityData} = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
