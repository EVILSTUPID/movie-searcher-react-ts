import { useDispatch, useSelector } from 'react-redux'
import { movieDataSelect, selectedFavouritesMovie } from '../../redux/selectors'
import {
  addFavouritesMovie,
  delFavouritesMovie,
  setFavouritesMovie,
  setPage,
  setSelectedMovieId
} from '../../redux/reducers'
import {
  Favourites,
  FavouritesInImage,
  Pages,
  Poster,
  PosterImage,
  PosterList,
  PosterName, ReadyPages,
  StyledLink
} from './PopularMovie.styled'
import { nanoid } from '@reduxjs/toolkit'
import { API_IMAGE_URL, API_KEY } from '../../redux/tools/api'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import * as React from 'react'
import { useEffect } from 'react'
import { scrollUp } from '../../redux/tools/scrollUp'

export const PopularMovie = () => {
  const dispatch = useDispatch()
  const movie = useSelector(movieDataSelect)
  const favourite = useSelector(selectedFavouritesMovie)
  useEffect(() => {
    const favouritesMovie = JSON.parse(localStorage.getItem('movie-app-ts'))
    dispatch(setFavouritesMovie(favouritesMovie))
  }, [])
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

  return (
        <div>
            <PosterList>
                {movie &&
                    movie.results.slice(0, 18).map((moviePost) => {
                      const isFavourite = favourite.findIndex((movie) => movie.id === moviePost.id) !== -1
                      return (
                            <Poster key={nanoid()}>
                              <FavouritesInImage>

                              <Favourites
                                  style={isFavourite ? { color: 'red' } : {}}
                                  onClick={() => {
                                    if (isFavourite) {
                                      dispatch(delFavouritesMovie(moviePost))
                                    } else {
                                      dispatch(addFavouritesMovie(moviePost))
                                    }
                                  }}
                              />
                                <StyledLink onClick={() => {
                                  dispatch(setSelectedMovieId(moviePost.id))
                                  scrollUp()
                                }} to='/info'>
                                <PosterImage
                                    src={`${API_IMAGE_URL}${moviePost.poster_path}?api_key=${API_KEY}`}
                                    alt=''/>

                                </StyledLink></FavouritesInImage>
                              <StyledLink onClick={() => dispatch(setSelectedMovieId(moviePost.id))} to='/info'>
                              <PosterName>
                              {moviePost.title}
                            </PosterName></StyledLink>
                            </Poster>
                      )
                    })
                }
            </PosterList>
            <Pages>
                <KeyboardArrowLeft style={{ cursor: 'pointer' }} onClick={() => {
                  backPage()
                  scrollUp()
                }}/>
                {movieListPages &&
                    movieListPages.map((readyPages) => {
                      if (isNaN(readyPages.pages)) {
                        readyPages.pages = undefined
                      }
                      const currentPage = readyPages?.pages === movie?.page
                      return (
                            <ReadyPages onClick={() => {
                              dispatch(setPage(readyPages.pages))
                              scrollUp()
                            }}
                                 style={currentPage ? { color: 'red' } : {}}
                                 key={nanoid()}>
                                {readyPages.pages}
                            </ReadyPages>
                      )
                    })}
                <KeyboardArrowRight style={{ cursor: 'pointer' }} onClick={() => {
                  nextPage()
                  scrollUp()
                }}/>
            </Pages>
        </div>
  )
}
