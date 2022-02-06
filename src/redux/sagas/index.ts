import {call, put, fork, takeEvery} from 'redux-saga/effects';
import {
  setForecasts, setWeather, setForecastsDays,
  fetchError, fetchLoaded, setCityData,
} from '../reducers';
import {
  FORECAST, LOAD_CITY, LOAD_MAIN_WEATHER,
  LOAD_WEATHER, WEATHER,
} from '../../actions/actions';


async function fetchWeather(type, payload) {
  const request = await fetch(
      `https://api.openweathermap.org/data/2.5/${type}?q=${payload}&appid=${process.env.REACT_APP_MY_APP_KEY}&units=metric&lang=ru`,
  );

  return request.json();
}

async function fetchCity(payload) {
  const request = await fetch(
      `https://autocomplete.travelpayouts.com/places2?term=${payload}&locale=ru&types[]=city`,
  );

  return request.json();
}
async function fetchForecastDays(lat, lon) {
  const request = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_MY_APP_KEY}&units=metric&lang=ru`,
  );

  return request.json();
}

export function* workerSaga({payload}) {
  try {
    const dataForecast = yield call(fetchWeather, FORECAST, payload);
    yield put(setForecasts(dataForecast));
    const dataWeather = yield call(fetchWeather, WEATHER, payload);
    yield put(setWeather(dataWeather));
    const {lat, lon} = dataWeather.coord;
    const dataForecastDays = yield call(fetchForecastDays, lat, lon);
    yield put(setForecastsDays(dataForecastDays));
    yield put(fetchLoaded());
  } catch (e) {
    yield put(fetchError());
  }
}

export function* workerSagaCity({payload}) {
  const dataCity = yield call(fetchCity, payload);
  yield put(setCityData(dataCity));
  console.log(dataCity);
}

export function* workerSagaMainWeather({payload}) {
  try {
    const dataForecastDays = yield call(fetchForecastDays, payload.lat, payload.lon);
    yield put(setForecastsDays(dataForecastDays));
    yield put(fetchLoaded());
  } catch (e) {
    yield put(fetchError());
  }
}


export function* watchLoadWeather() {
  yield takeEvery<any>(LOAD_WEATHER, workerSaga);
  yield takeEvery<any>(LOAD_CITY, workerSagaCity);
  yield takeEvery<any>(LOAD_MAIN_WEATHER, workerSagaMainWeather);
}
export function* rootSaga() {
  yield fork(watchLoadWeather);
}
