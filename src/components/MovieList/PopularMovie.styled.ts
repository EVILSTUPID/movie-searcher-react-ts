import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'

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
  
;
`
export const PosterImage = styled.img`
  width: 250px;
  height: 350px;
  border-radius: 20px;
  box-shadow: 0 30px 10px 0 rgba(0, 0, 0, 0.8);
`
export const FavouritesInImage = styled.div`
  position: relative;
`
export const FavouritesTitle = styled.div`
  font-size: 20px;
  margin-top: 13px;
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 10px;
`

export const PosterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  
`

export const ReadyPages = styled.div`
    cursor: pointer;
`
export const PosterName = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  justify-content: center;
  color: #c9c9c9;
  margin-top: 20px;
  font-size: 20px;
  text-shadow: 0 0 3px white, 0 0 8px #b61301;
  text-decoration: none;
`

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #c9c9c9;
  padding-bottom: 20px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
