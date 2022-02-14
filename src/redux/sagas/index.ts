import {call, fork, put, takeEvery} from 'redux-saga/effects';
import {LOAD_PAGE, LOAD_SEARCHED_MOVIE, LOAD_SELECTED_MOVIE} from "../../actions/actions";
import {setMovieData, setMovieSearchData, setSelectedMovieDetailsData} from "../reducers";
import {API_KEY, API_URL} from "../../tools/api";
import axios from "axios";

async function fetchMovie(payload) {
  const request = await fetch(
      `${API_URL}movie/popular?api_key=${API_KEY}&language=ru&page=${payload}&adult=false`,
  );

  return request.json();
}
async function fetchLanguages() {
  const request = await fetch(
      `${API_URL}configuration/languages?api_key=${API_KEY}`,
  );

  return request.json();
}

async function fetchVideo({movie_id}) {
  const request = await fetch(
      `${API_URL}movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`,
  );

  return request.json();
}

async function fetchSearchMovie() {
  const request = await fetch(
      `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  );

  return request.json();
}



const axiosPopular = axios.create({
  baseURL: API_URL
})
export function* workerMovie({payload}) {
  const popularMovieArr = yield call(() => axiosPopular.get(`movie/popular?api_key=${API_KEY}&page=${payload}&language=ru`))
  yield put(setMovieData(popularMovieArr.data));


}
export function* workerMovieSelect({payload}) {
  const selectedMovieInfo = yield call(() => axiosPopular.get(`movie/${payload}?api_key=${API_KEY}&language=ru`))
  yield put(setSelectedMovieDetailsData(selectedMovieInfo.data));
}

export function* workerMovieSearch({payload}) {
  const searchedMovie = yield call(() => axiosPopular
      .get(
      `search/movie?api_key=${API_KEY}&language=ru&query=${payload}&page=1&include_adult=false`
  ))
  yield put(setMovieSearchData(searchedMovie.data))
  console.log(payload)

}



export function* watchLoadWeather() {
  yield takeEvery<any>(LOAD_SELECTED_MOVIE, workerMovieSelect);
  yield takeEvery<any>(LOAD_PAGE, workerMovie);
  yield takeEvery<any>(LOAD_SEARCHED_MOVIE, workerMovieSearch);
}
export function* rootSaga() {
  yield fork(watchLoadWeather);
}
