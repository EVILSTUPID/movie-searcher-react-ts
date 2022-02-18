import { PopularMovie } from '../MovieList/PopularMovie'
import { UpComingMovies } from '../UpComingMovies/UpComingMovies'
import {FavouriteMovie} from "../MovieList/FavouriteMovie";

export const MainMovie = (): JSX.Element => {
  return (
        <div>
            <UpComingMovies/>
            <PopularMovie/>
        </div>
  )
}
