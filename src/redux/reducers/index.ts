import { createAction, createSlice } from '@reduxjs/toolkit'
import { ImovieStatus } from '../../types/types'
import { LOAD_PAGE, LOAD_SEARCHED_MOVIE, LOAD_SELECTED_MOVIE } from '../actions/actions'

const initialState: ImovieStatus = {
  moviePopularList: null,
  selectedMovieDetails: {
    selectedMovieData: null,
    selectedMovieSimilar: null
  },
  favouritesMovie: [],
  movieSearchData: null,
  movieNowPLaying: null,
  isMovieDataError: false,
  isMovieDataLoad: false,
  isSelectedMovieDataError: false,
  isSelectedMovieDataLoad: false
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieData (state, action) {
      state.moviePopularList = action.payload
    },
    fetchMovieDataError (state) {
      state.isMovieDataError = true
      state.isMovieDataLoad = false
    },
    fetchMovieDataLoad (state) {
      state.isMovieDataLoad = true
      state.isMovieDataError = false
    },
    fetchSelectMovieError (state) {
      state.isSelectedMovieDataError = true
      state.isSelectedMovieDataLoad = false
    },
    fetchSelectMovieLoad (state) {
      state.isSelectedMovieDataLoad = true
      state.isSelectedMovieDataError = false
    },
    clearFetchSelectMovieLoad (state) {
      state.isSelectedMovieDataLoad = false
      state.isSelectedMovieDataError = false
    },
    setSelectedMovieDetailsData (state, action) {
      state.selectedMovieDetails.selectedMovieData = action.payload
    },
    setMovieSearchData (state, action) {
      state.movieSearchData = action.payload
    },
    setMovieSimilar (state, action) {
      state.selectedMovieDetails.selectedMovieSimilar = action.payload
    },
    setMovieNowPlaying (state, action) {
      state.movieNowPLaying = action.payload
    },
    addFavouritesMovie (state, action) {
      if (state.favouritesMovie.findIndex((movie) => movie.id === action.payload.id) == -1) {
        state.favouritesMovie.push(action.payload)
      }
    },
    delFavouritesMovie (state, action) {
      state.favouritesMovie = state.favouritesMovie.filter((movie) => movie.id !== action.payload.id)
    },
    setFavouritesMovie (state, action) {
      if (action.payload !== null) {
      state.favouritesMovie = action.payload
      }
    },
    clearMovieSearchData (state) {
      state.movieSearchData = null
    }
  }
})

export const setPage = createAction(LOAD_PAGE, (page) => ({
  payload: page
}))
export const setSelectedMovieId = createAction(LOAD_SELECTED_MOVIE, (id) => ({
  payload: id
}))

export const setSearchedMovie = createAction(LOAD_SEARCHED_MOVIE, (query) => ({
  payload: query
}))

export const {
  setMovieData, setMovieNowPlaying,
  setSelectedMovieDetailsData, setMovieSearchData,
  clearMovieSearchData, setMovieSimilar,
  addFavouritesMovie, delFavouritesMovie,
  setFavouritesMovie, fetchMovieDataLoad, fetchMovieDataError,
  fetchSelectMovieError, fetchSelectMovieLoad, clearFetchSelectMovieLoad

} = movieSlice.actions

export const movieReducer = movieSlice.reducer
