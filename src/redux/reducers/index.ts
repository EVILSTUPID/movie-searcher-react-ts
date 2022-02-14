import {createAction, createSlice} from '@reduxjs/toolkit';
import {ImovieStatus} from '../../types/types';
import {LOAD_PAGE, LOAD_SEARCHED_MOVIE, LOAD_SELECTED_MOVIE} from "../../actions/actions";


const initialState: ImovieStatus = {
  moviePopularList: null,
  selectedMovieDetails: null,
  movieSearchData: null
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setMovieData (state, action) {
      state.moviePopularList = action.payload
    },
    setSelectedMovieDetailsData (state, action) {
      state.selectedMovieDetails = action.payload
    },
    setMovieSearchData (state, action) {
      state.movieSearchData = action.payload
      console.log(action.payload)
    },
    clearMovieSearchData (state) {
      state.movieSearchData = null
    }
  },
});

export const setPage = createAction(LOAD_PAGE, (page) => ({
  payload: page,
}));
export const setSelectedMovieId = createAction(LOAD_SELECTED_MOVIE, (id) => ({
  payload: id,
}));

export const setSearchedMovie = createAction(LOAD_SEARCHED_MOVIE, (query) => ({
  payload: query,
}));

export const { setMovieData, setSelectedMovieDetailsData, setMovieSearchData, clearMovieSearchData } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
