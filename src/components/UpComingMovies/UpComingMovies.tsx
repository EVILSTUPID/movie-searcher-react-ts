import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper'
import { BackImage, UpComingMoviesCarousel, UpComingMoviesOverview, UpComingMoviesSlider } from './UpComingMovies.styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectedMovieNowPlaying } from '../../redux/selectors'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'
import { setSelectedMovieId } from '../../redux/reducers'
import { API_IMAGE_URL, API_KEY } from '../../redux/tools/api'
import * as React from 'react'

export const UpComingMovies = (): JSX.Element => {
  const movieNowPlayingInfo = useSelector(selectedMovieNowPlaying)?.results
  const dispatch = useDispatch()
  return (
        <div>
            <UpComingMoviesCarousel
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
                            <SwiperSlide key={nanoid()}><UpComingMoviesSlider {...nanoid()}>
                                <Link onClick={() => {
                                  dispatch(setSelectedMovieId(movie.id))
                                }} to='/info'>
                                    <BackImage
                                        src={`${API_IMAGE_URL}${movie.backdrop_path}?api_key=${API_KEY}`}
                                        alt=''
                                    />
                                <UpComingMoviesOverview>{movie.overview.slice(0, 120)}....</UpComingMoviesOverview>
                                </Link>
                            </UpComingMoviesSlider></SwiperSlide>

                      )
                    })}
            </UpComingMoviesCarousel>
        </div>
  )
}
