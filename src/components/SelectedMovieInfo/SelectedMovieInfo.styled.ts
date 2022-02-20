import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const PosterImage = styled.img`
  width: 250px;
  height: 350px;
  border-radius: 20px;
  box-shadow: 0 30px 10px 0 rgba(0, 0, 0, 0.8);
`
export const FavouritesInImage = styled.div`
  position: relative;
`
export const Favourites = styled(FavoriteIcon)`
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 20px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85), transparent);
  @keyframes pulse {
    0% {
      transform: scale(0.8);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    50% {
      transform: scale(1.5);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }
    100% {
      transform: scale(1);
    }
  }
  &:active {
    animation: pulse 0.3s;
  }
  
;`

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const SwiperSlideStyled = styled(SwiperSlide)`
    background-color: white;
  color: black;
  
`
export const SliderSimilarMovie = styled.div`
  text-align: center;
`
export const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 420px;
  margin-bottom: 50px;

  .swiper-pagination-bullet {
    background-color: rgb(255, 255, 255, 1);
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    width: 10px;
    height: 10px;
    background-color: rgba(255, 0, 0, 1);
  }
`

export const StyledMovieInfo = styled.div`
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

`

export const MovieInfoName = styled.div`
  display: flex;
  color: #ffffff;
  font-size: 20px;
  text-shadow: 0 0 3px white;
  text-decoration: none;
  padding: 20px;
`
export const StyledMovieInfoOverwied = styled.div`
    font-size: 15px;
  padding: 0 10px 40px 10px;

`
export const StyledMovieInfoBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 10px 10px 10px;
  border-radius: 15%;
  background-color: rgba(28, 28, 28, 0.29);
  width: 100%;
`
export const StyledMovieSelectedGenres = styled.div`
    display: flex;
  flex-direction: row;
  margin: 20px;
  font-size: 14px;
  padding: 10px;
  flex-wrap: wrap;
  

`

export const MovieCompanyBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 20px;
`

export const MovieMiniInfoBlocks = styled.div`
    margin-top: 10px;
`
