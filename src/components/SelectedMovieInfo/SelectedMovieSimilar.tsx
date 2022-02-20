import { useDispatch, useSelector } from 'react-redux'
import { selectedMovieSimilar } from '../../redux/selectors'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Mousewheel, Pagination } from 'swiper'
import { SliderSimilarMovie, SwiperStyled } from './SelectedMovieInfo.styled'
import { nanoid } from '@reduxjs/toolkit'
import { API_IMAGE_URL, API_KEY } from '../../redux/tools/api'
import { PosterImage } from '../MovieList/PopularMovie.styled'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { clearFetchSelectMovieLoad, setSelectedMovieId } from '../../redux/reducers'
import { scrollUp } from '../../redux/tools/scrollUp'

export const SelectedMovieSimilar = (): JSX.Element => {
  const similar = useSelector(selectedMovieSimilar)?.results
  const dispatch = useDispatch()
  return (

        <div className="app_main">
            <SwiperStyled
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                autoplay={true}
                pagination={{
                  clickable: true
                }}
                modules={[Mousewheel, Pagination, Autoplay]}
                className="mySwiper"
            >
                {similar &&
                    similar.slice(0, 11).map((movie) => {
                      return (
                            <SwiperSlide key={nanoid()}><SliderSimilarMovie {...nanoid()}>
                                <h1>Похожее:</h1>
                                <Link onClick={() => {
                                  scrollUp()
                                  dispatch(setSelectedMovieId(movie.id))
                                  dispatch(clearFetchSelectMovieLoad())
                                }} to='/info'>
                                <PosterImage
                                    src={`${API_IMAGE_URL}${movie.poster_path}?api_key=${API_KEY}`}
                                    alt=''
                                /></Link>
                            </SliderSimilarMovie></SwiperSlide>

                      )
                    })}
            </SwiperStyled>
        </div>
  )
}
