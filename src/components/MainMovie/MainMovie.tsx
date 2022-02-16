import { PopularMovie } from '../PopularMovie/PopularMovie'
import { UpComingMovies } from '../UpComingMovies/UpComingMovies'

export const MainMovie = (): JSX.Element => {
  return (
        <div>
            <UpComingMovies/>
            <PopularMovie/>
        </div>
  )
}
