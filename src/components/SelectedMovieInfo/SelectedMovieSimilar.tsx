import { useDispatch, useSelector } from 'react-redux'
import { selectedMovieSimilar } from '../../redux/selectors'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Mousewheel, Pagination } from 'swiper'
import { SliderSimilarMovie, SwiperSlideStyled, SwiperStyled } from './SelectedMovieInfo.styled'
import { nanoid } from '@reduxjs/toolkit'
import { API_IMAGE_URL, API_KEY } from '../../redux/tools/api'
import { PosterImage } from '../PopularMovie/PopularMovie.styled'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { setSelectedMovieId } from '../../redux/reducers'
import { useState } from 'react'

export const SelectedMovieSimilar = (): JSX.Element => {
  const similar = useSelector(selectedMovieSimilar)?.results
  const dispatch = useDispatch()
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
        <div className="app_main">
            <SwiperStyled
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                  clickable: true
                }}
                modules={[Mousewheel, Pagination]}
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
