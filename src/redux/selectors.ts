import {
 movieData, movieStatus
} from '../types/types';


export const movieDataSelect = (state: movieStatus): movieData | null | undefined =>
  state?.movieList;


