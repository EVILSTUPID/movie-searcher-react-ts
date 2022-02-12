import {createAction, createSlice} from '@reduxjs/toolkit';
import {movieStatus} from '../../types/types';
import {LOAD_MOVIE, LOAD_PAGE} from "../../actions/actions";


const initialState: movieStatus = {
  movieList: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setMovieData (state, action) {
      state.movieList = action.payload
    },
    setMovieDataIn (state) {
      const incrData = 1
      state.movieList.page = state.movieList?.page + incrData
    }
  },
});

export const setMovie = createAction(LOAD_MOVIE, (page) => ({
  payload: page,
}));
export const setPage = createAction(LOAD_PAGE, (page) => ({
  payload: page,
}));

export const { setMovieData, setMovieDataIn } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
