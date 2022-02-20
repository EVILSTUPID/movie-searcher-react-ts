import { PopularMovie } from '../MovieList/PopularMovie'
import { UpComingMovies } from '../UpComingMovies/UpComingMovies'
import { useDispatch, useSelector } from 'react-redux'
import { selectedIsMovieDataError, selectedIsMovieDataLoad } from '../../redux/selectors'
import { CircularProgress } from '@mui/material'
import ErrorIcon from '@mui/icons-material/Error'
import { CircularProgressStyled, ErrorNameStyled } from './MainMovie.styled'
import { useEffect } from 'react'
import { setFavouritesMovie } from '../../redux/reducers'

export const MainMovie = (): JSX.Element => {
  const isMovieDataError = useSelector(selectedIsMovieDataError)
  const isMovieDataLoad = useSelector(selectedIsMovieDataLoad)
  const dispatch = useDispatch()
  useEffect(() => {
    const favouritesMovie = JSON.parse(localStorage.getItem('movie-app-ts'))
    dispatch(setFavouritesMovie(favouritesMovie))
  }, [])
  if (isMovieDataError) {
    return (
                <CircularProgressStyled>
                <ErrorIcon/>
                <ErrorNameStyled>
                Произошла ошибка
                </ErrorNameStyled>
                </CircularProgressStyled>
    )
  } else {
    return (
            <div>
                { isMovieDataLoad
                  ? <div>
                    <UpComingMovies/>
                    <PopularMovie/>
                    </div>
                  : <CircularProgressStyled>
                        <CircularProgress/>
                </CircularProgressStyled>
                }
            </div>
    )
  }
}
