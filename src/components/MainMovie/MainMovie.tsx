import { PopularMovie } from '../PopularMovie/PopularMovie'
import { NowPlayingMovies } from '../NowPlayingMovies/NowPlayingMovies'

export const MainMovie = (): JSX.Element => {
  return (
        <div>
            <NowPlayingMovies/>
            <PopularMovie/>
        </div>
  )
}
