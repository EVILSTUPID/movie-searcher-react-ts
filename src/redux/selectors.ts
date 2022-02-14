import {ImovieData, ImovieStatus, IselectedMovieData} from '../types/types';


export const movieDataSelect = (state: ImovieStatus): ImovieData | null | undefined =>
    state?.moviePopularList;
export const selectedMovieSelect= (state: ImovieStatus): IselectedMovieData | undefined =>
    state?.selectedMovieDetails;
export const searchedMovieSelect= (state: ImovieStatus): ImovieData | undefined =>
    state?.movieSearchData;


