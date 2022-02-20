import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MovieSearchList = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  max-width: 169px;
  padding: 10px 5px 10px 5px;
  border-radius: 20px;
  border: 1px black solid;
  font-size: 15px;
  @media (max-width: 500px) {
    max-width: 100px;
  }

`

export const SearchStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  
`
export const AutoComplete = styled.div`
  max-height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
`
export const InputStyled = styled.input`
    border-radius: 20px;
  height: 30px;
  padding-left: 10px;
  max-width: 183px;
  @media (max-width: 500px) {
    max-width: 100px;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: row;
`
export const MovieSearchPoster = styled.img`
  width: 50px;
  height: 60px;
  @media (max-width: 500px) {
    width: 20px;
    height: 30px;
  }
`
export const MovieSearchName = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  @media (max-width: 500px) {
    max-width: 70px;
    overflow-x: auto;
  }
`
