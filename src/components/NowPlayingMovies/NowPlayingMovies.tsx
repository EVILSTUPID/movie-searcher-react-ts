import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper'
import { BackImage, NowPlayingCarousel, NowPlayingOverview, NowPlayingSlider } from './NowPlayingMovies.styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectedMovieNowPlaying } from '../../redux/selectors'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'
import { setSelectedMovieId } from '../../redux/reducers'
import { PosterImage } from '../PopularMovie/PopularMovie.styled'
import { API_IMAGE_URL, API_KEY } from '../../tools/api'
import * as React from 'react'

export const NowPlayingMovies = (): JSX.Element => {
  const movieNowPlayingInfo = useSelector(selectedMovieNowPlaying)?.results
  const dispatch = useDispatch()
  return (
        <div>
            <NowPlayingCarousel
                pagination={{
                  type: 'progressbar'
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {movieNowPlayingInfo &&
                    movieNowPlayingInfo.slice(0, 11).map((movie) => {
                      return (
                            <SwiperSlide key={nanoid()}><NowPlayingSlider {...nanoid()}>
                                <Link onClick={() => {
                                  dispatch(setSelectedMovieId(movie.id))
                                }} to='/info'>
                                    <BackImage
                                        src={`${API_IMAGE_URL}${movie.backdrop_path}?api_key=${API_KEY}`}
                                        alt=''
                                    />
                                <NowPlayingOverview>{movie.overview.slice(0, 120)}....</NowPlayingOverview>
                                </Link>
                            </NowPlayingSlider></SwiperSlide>

                      )
                    })}
            </NowPlayingCarousel>
        </div>
  )
}
