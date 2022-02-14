import styled from 'styled-components';
import {Link} from "react-router-dom";

export const PosterImage = styled.img`
  width: 250px;
  height: 350px;
  border-radius: 20px;
  box-shadow: 0 30px 10px 0 rgba(0, 0, 0, 0.8);
`;

export const Poster = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const PosterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  
`;
export const PosterName = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  justify-content: center;
  color: #c9c9c9;
  margin: 10px;
  font-size: 20px;
  text-shadow: 0 0 3px white, 0 0 8px #b61301;
  text-decoration: none;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 30px;
  color: #c9c9c9;
  padding-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;






