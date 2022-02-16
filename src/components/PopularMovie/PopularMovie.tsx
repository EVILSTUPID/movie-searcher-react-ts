import { useDispatch, useSelector } from 'react-redux'
import { movieDataSelect } from '../../redux/selectors'
import { setPage, setSelectedMovieId } from '../../redux/reducers'
import { Pages, Poster, PosterImage, PosterList, PosterName, StyledLink } from './PopularMovie.styled'
import { nanoid } from '@reduxjs/toolkit'
import { API_IMAGE_URL, API_KEY } from '../../tools/api'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import * as React from 'react'

export const PopularMovie = () => {
  const dispatch = useDispatch()
  const movie = useSelector(movieDataSelect)
  const movieListPages = [
    {
      pages: movie?.page
    },
    {
      pages: movie?.page + 1
    },
    {
      pages: movie?.page + 2
    }
  ]
  if (movie?.page > 2) {
    movieListPages.unshift({ pages: movie.page - 2 })
  }
  if (movie?.page > 1) {
    movieListPages.unshift({ pages: movie.page - 1 })
    movieListPages.sort((prev, next) => prev.pages - next.pages)
  }
  const nextPage = () => {
    if (movie.page < movie.total_pages) {
      dispatch(setPage(movie.page + 1))
    }
  }
  const backPage = () => {
    if (movie.page > 1) {
      dispatch(setPage(movie.page - 1))
    }
  }

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
        <div>
            <PosterList>
                {movie &&
                    movie.results.slice(0, 18).map((moviePost) => {
                      return (
                            <Poster key={nanoid()}>
                                <StyledLink onClick={() => dispatch(setSelectedMovieId(moviePost.id))} to='/info'>
                                <PosterImage
                                    src={`${API_IMAGE_URL}${moviePost.poster_path}?api_key=${API_KEY}`}
                                    alt=''/>
                                <PosterName>
                                    {moviePost.title}
                                </PosterName>
                                </StyledLink>
                            </Poster>
                      )
                    })
                }
            </PosterList>
            <Pages>
                <KeyboardArrowLeft onClick={() => {
                  backPage()
                  scrollUp()
                }}/>
                {movieListPages &&
                    movieListPages.map((readyPages) => {
                      if (isNaN(readyPages.pages)) {
                        readyPages.pages = undefined
                      }
                      return (
                            <div onClick={() => {
                              dispatch(setPage(readyPages.pages))
                              scrollUp()
                            }} key={nanoid()}>
                                {readyPages.pages}
                            </div>
                      )
                    })}
                <KeyboardArrowRight onClick={() => {
                  nextPage()
                  scrollUp()
                }}/>
            </Pages>
        </div>
  )
}
