import { useDispatch, useSelector } from 'react-redux'
import { selectedIsSelectedMovieDataError, selectedIsSelectedMovieDataLoad } from '../../redux/selectors'
import { useEffect } from 'react'
import { setFavouritesMovie } from '../../redux/reducers'
import { CircularProgressStyled, ErrorNameStyled } from '../MainMovie/MainMovie.styled'
import ErrorIcon from '@mui/icons-material/Error'
import { SelectedMovieInfo } from './SelectedMovieInfo'
import { CircularProgress } from '@mui/material'

export const SelectedMovieInfoCheck = (): JSX.Element => {
  const isSelectedMovieDataError = useSelector(selectedIsSelectedMovieDataError)
  const isSelectedMovieDataLoad = useSelector(selectedIsSelectedMovieDataLoad)
  const dispatch = useDispatch()
  useEffect(() => {
    const favouritesMovie = JSON.parse(localStorage.getItem('movie-app-ts'))
    dispatch(setFavouritesMovie(favouritesMovie))
  }, [])
  if (isSelectedMovieDataError) {
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
            { isSelectedMovieDataLoad
              ? <div>
                    <SelectedMovieInfo/>
                </div>
              : <CircularProgressStyled>
                    <CircularProgress/>
                </CircularProgressStyled>
            }
        </div>
    )
  }
}
