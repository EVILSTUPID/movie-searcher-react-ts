export interface ImovieStatus {
  moviePopularList: ImovieData | undefined | null
  selectedMovieDetails: IselectedMovieData | undefined | null
  movieSearchData: ImovieData | undefined | null
}

export interface ImovieData {
  page: number;
  results: ImovieDateArray[];
  total_pages: number;
  incrData: number;
}

export interface ImovieDateArray {
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
export interface IselectedMovieData {
  belongs_to_collection: ImovieCollection;
  budget: number;
  genres: ImovieGenres[];
  homepage: string;
  id: number;
  imdb_id: string;
  overview: string;
  poster_path: string
  production_companies: ImovieProductionCompanies[];
  production_countries: ImovieProductionCountries[];
  release_date: string;
  revenue: number;
  title: string;
  vote_average: number;
  vote_count: number;

}

export interface ImovieProductionCountries {
  name: string
}

export interface ImovieProductionCompanies {
  logo_path: string;
  name: string;
}

export interface ImovieGenres {
  id: number;
  name: string;
  length: number;
}

export interface ImovieCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}