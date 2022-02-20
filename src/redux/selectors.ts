import { ImovieData, ImovieDateArray, ImovieStatus, IselectedMovieData } from '../types/types'

export const movieDataSelect = (state: ImovieStatus): ImovieData | null | undefined =>
  state?.moviePopularList
export const selectedMovieSelect = (state: ImovieStatus): IselectedMovieData | null | undefined =>
  state?.selectedMovieDetails.selectedMovieData
export const searchedMovieSelect = (state: ImovieStatus): ImovieData | null | undefined =>
  state?.movieSearchData
export const selectedMovieSimilar = (state: ImovieStatus): ImovieData | null | undefined =>
  state?.selectedMovieDetails.selectedMovieSimilar
export const selectedMovieNowPlaying = (state: ImovieStatus): ImovieData | null | undefined =>
  state?.movieNowPLaying
export const selectedFavouritesMovie = (state: ImovieStatus): ImovieDateArray[] | null | undefined =>
  state?.favouritesMovie
export const selectedIsMovieDataError = (state: ImovieStatus): boolean =>
  state.isMovieDataError
export const selectedIsMovieDataLoad = (state: ImovieStatus): boolean =>
  state.isMovieDataLoad
export const selectedIsSelectedMovieDataError = (state: ImovieStatus): boolean =>
  state.isSelectedMovieDataError
export const selectedIsSelectedMovieDataLoad = (state: ImovieStatus): boolean =>
  state.isSelectedMovieDataLoad
