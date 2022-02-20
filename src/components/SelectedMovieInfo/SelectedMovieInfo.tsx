import { useDispatch, useSelector } from 'react-redux'
import { selectedFavouritesMovie, selectedMovieSelect } from '../../redux/selectors'
import { API_IMAGE_URL, API_KEY } from '../../redux/tools/api'
import {
  Favourites,
  FavouritesInImage,
  MovieCompanyBlock,
  MovieInfoName,
  MovieMiniInfoBlocks,
  PosterImage,
  StyledMovieInfo,
  StyledMovieInfoBlock,
  StyledMovieInfoOverwied,
  StyledMovieSelectedGenres
} from './SelectedMovieInfo.styled'
import { nanoid } from '@reduxjs/toolkit'
import { SelectedMovieSimilar } from './SelectedMovieSimilar'
import { addFavouritesMovie, delFavouritesMovie } from '../../redux/reducers'

export const SelectedMovieInfo = (): JSX.Element => {
  const selectedMovie = useSelector(selectedMovieSelect)
  const favourite = useSelector(selectedFavouritesMovie)
  const favouriteMovie = {
    isFavourite: false
  }
  if (favourite !== null) {
    favouriteMovie.isFavourite = favourite.findIndex((movie) => movie?.id === selectedMovie?.id) !== -1
  }
  const dispatch = useDispatch()
  return (

<div>{selectedMovie && (
    <div>
        <StyledMovieInfo>
          <FavouritesInImage>
            <Favourites
                style={favouriteMovie.isFavourite ? { color: 'red' } : {}}
                onClick={() => {
                  if (favouriteMovie.isFavourite) {
                    dispatch(delFavouritesMovie(selectedMovie))
                  } else {
                    dispatch(addFavouritesMovie(selectedMovie))
                  }
                }}
            />
        <PosterImage
            src={`${API_IMAGE_URL}${selectedMovie.poster_path}?api_key=${API_KEY}`}
        alt=''/>
        </FavouritesInImage>
            <StyledMovieInfoBlock>
            <MovieInfoName>
            {selectedMovie.title}
            </MovieInfoName>
                <StyledMovieSelectedGenres>
                    <div>Жанры:</div>
                    {selectedMovie.genres.map((genres) => {
                      return (
                            <div key={nanoid()}>&nbsp;{genres.name},</div>
                      )
                    })}
                </StyledMovieSelectedGenres>
            <StyledMovieInfoOverwied>
            {selectedMovie.overview}
                <MovieMiniInfoBlocks>Бюджет: {selectedMovie.budget}</MovieMiniInfoBlocks>
                <MovieMiniInfoBlocks>Средняя оценка: {selectedMovie.vote_average}</MovieMiniInfoBlocks>
                <MovieMiniInfoBlocks>
                <MovieCompanyBlock>Компании: {selectedMovie.production_companies.map((companies) => {
                  return (
                        <div key={nanoid()}>
                            <div>&nbsp;{companies.name},</div>
                        </div>

                  )
                })}</MovieCompanyBlock></MovieMiniInfoBlocks>

            </StyledMovieInfoOverwied>
            </StyledMovieInfoBlock>
            <SelectedMovieSimilar/>
        </StyledMovieInfo>
    </div>)}
</div>
  )
}
