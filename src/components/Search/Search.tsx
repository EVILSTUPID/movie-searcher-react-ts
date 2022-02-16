import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { clearMovieSearchData, setSearchedMovie, setSelectedMovieId } from '../../redux/reducers'
import { searchedMovieSelect } from '../../redux/selectors'
import { nanoid } from '@reduxjs/toolkit'
import {
  AutoComplete,
  InputStyled,
  MovieSearchList,
  MovieSearchName,
  MovieSearchPoster,
  SearchStyled,
  StyledLink
} from './Search.styled'
import { API_IMAGE_URL, API_KEY } from '../../tools/api'

export const Search = () => {
  const [value, setValue] = useState<string>('')
  const movieSearched = useSelector(searchedMovieSelect)?.results
  const dispatch = useDispatch()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (e.target.value.trim().length > 1) {
      dispatch(setSearchedMovie(e.target.value))
    }
    if (e.target.value.trim().length === 0) {
      dispatch(clearMovieSearchData())
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value.trim()) {
      setValue('')
    }
  }
  return (

        <SearchStyled>
            <form onSubmit={handleSubmit}>
                <InputStyled
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                    value={value}
                />
            </form>
            <AutoComplete>
                {movieSearched &&
                    movieSearched.slice(0, 4).map((movie) => {
                      return (

                            <MovieSearchList key={nanoid()}>
                                <StyledLink onClick={() => {
                                  dispatch(setSelectedMovieId(movie.id))
                                  dispatch(clearMovieSearchData())
                                  setValue('')
                                }} to='/info'>
                                    <div>
                                    <MovieSearchPoster
                                    src={`${API_IMAGE_URL}${movie.poster_path}?api_key=${API_KEY}`}
                                    alt=''/></div>
                                    <MovieSearchName>
                                        {movie.title}
                                    </MovieSearchName>
                                </StyledLink>
                            </MovieSearchList>
                      )
                    })

                }
            </AutoComplete>
        </SearchStyled>
  )
}
