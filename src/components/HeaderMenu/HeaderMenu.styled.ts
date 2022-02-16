import styled from 'styled-components';
import {Link} from "react-router-dom";

export const HeaderMenuStyled = styled.div`
  width: 100%;
  margin: auto;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  color: #e1e0e0;
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
`;
export const HeaderPage = styled(Link)`
  border-left: 1px solid #d7d7d7;
  padding: 0 15px 0 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`;
export const SearchPage = styled.div`
  border-left: 1px solid #d7d7d7;
  padding: 0 15px 0 15px;
  position: relative;
  z-index: 1;
  
`;