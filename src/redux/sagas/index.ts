import { call, fork, put, takeEvery } from 'redux-saga/effects'
import { LOAD_PAGE, LOAD_SEARCHED_MOVIE, LOAD_SELECTED_MOVIE } from '../actions/actions'
import {
  fetchMovieDataError,
  fetchMovieDataLoad,
  fetchSelectMovieError,
  fetchSelectMovieLoad,
  setMovieData,
  setMovieNowPlaying,
  setMovieSearchData,
  setMovieSimilar,
  setSelectedMovieDetailsData
} from '../reducers'
import { API_KEY, axiosPopular } from '../tools/api'

export function * workerMovieLoad ({ payload }) {
  try {
    const nowPlayingMovie = yield call(() => axiosPopular.get(
        `movie/upcoming?api_key=${API_KEY}&page=${payload}&language=ru`
    ))
    yield put(setMovieNowPlaying(nowPlayingMovie.data))
    const popularMovieArr = yield call(() => axiosPopular.get(
        `movie/popular?api_key=${API_KEY}&page=${payload}&language=ru`
    ))
    yield put(setMovieData(popularMovieArr.data))
    yield put(fetchMovieDataLoad())
  } catch (error) {
    yield put(fetchMovieDataError())
  }
}
export function * workerMovieSelect ({ payload }) {
  try {
    const selectedMovieInfo = yield call(() => axiosPopular.get(`movie/${payload}?api_key=${API_KEY}&language=ru`))
    yield put(setSelectedMovieDetailsData(selectedMovieInfo.data))
    const selectedMovieSimilar = yield call(() => axiosPopular
      .get(
          `/movie/${payload}/similar?api_key=${API_KEY}&language=ru&page=1`
      ))
    yield put(setMovieSimilar(selectedMovieSimilar.data))
    yield put(fetchSelectMovieLoad())
  } catch (error) {
    yield put(fetchSelectMovieError())
  }
}

export function * workerMovieSearch ({ payload }) {
  const searchedMovie = yield call(() => axiosPopular
    .get(
      `search/movie?api_key=${API_KEY}&language=ru&query=${payload}&page=1&include_adult=false`
    ))
  yield put(setMovieSearchData(searchedMovie.data))
}

export function * watchLoadWeather () {
  yield takeEvery<any>(LOAD_SELECTED_MOVIE, workerMovieSelect)
  yield takeEvery<any>(LOAD_PAGE, workerMovieLoad)
  yield takeEvery<any>(LOAD_SEARCHED_MOVIE, workerMovieSearch)
}
export function * rootSaga () {
  yield fork(watchLoadWeather)
}
