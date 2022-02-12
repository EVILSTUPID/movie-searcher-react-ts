export interface movieStatus {
  movieList: movieData | undefined | null
}

export interface movieData {
  page: number;
  results: movieDateListArray[];
  total_pages: number;
  incrData: number;
}

export interface movieDateListArray {
  adult: number;
  backdrop_path: string;
  id: number;
  original_title: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: string;
}