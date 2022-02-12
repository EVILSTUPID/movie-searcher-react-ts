import {call, fork, put, takeEvery} from 'redux-saga/effects';
import {LOAD_MOVIE, LOAD_PAGE} from "../../actions/actions";
import {setMovieData} from "../reducers";
import {API_CALL, API_KEY} from "../../tools/api";
import axios from "axios";

async function fetchMovie(payload) {
  const request = await fetch(
      `${API_CALL}movie/popular?api_key=${API_KEY}&language=ru&page=${payload}&adult=false`,
  );

  return request.json();
}
async function fetchLanguages() {
  const request = await fetch(
      `${API_CALL}configuration/languages?api_key=${API_KEY}`,
  );

  return request.json();
}

async function fetchVideo({movie_id}) {
  const request = await fetch(
      `${API_CALL}movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`,
  );

  return request.json();
}

async function fetchSearchMovie() {
  const request = await fetch(
      `${API_CALL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  );

  return request.json();
}



const axiosSuccess = axios.create({
  baseURL: `${API_CALL}movie/popular?api_key=${API_KEY}&language=ru&adult=false`
})

export function* workerMovie({payload}) {
  const movieData = yield call(() => axiosSuccess.get(`&page=${payload}`))
  console.log(movieData)
  yield put(setMovieData(movieData));

  const lan = yield call(fetchLanguages)
  console.log()

}


export function* watchLoadWeather() {
  yield takeEvery<any>(LOAD_MOVIE, workerMovie);
  yield takeEvery<any>(LOAD_PAGE, workerMovie);
}
export function* rootSaga() {
  yield fork(watchLoadWeather);
}
