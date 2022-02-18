import {Favourites, HeaderMenuStyled, HeaderPage, Home, SearchPage} from './HeaderMenu.styled'
import { Outlet } from 'react-router-dom'
import { Search } from '../Search/Search'
import {scrollUp} from "../../redux/tools/scrollUp";
import {useEffect} from "react";
import {setPage} from "../../redux/reducers";
import {useSelector} from "react-redux";
import {selectedFavouritesMovie} from "../../redux/selectors";
import {saveToLocalStorage} from "../../redux/tools/localStorage";

export const HeaderMenu = () => {
    const favourite = useSelector(selectedFavouritesMovie)

    useEffect(() => {
        saveToLocalStorage(favourite)
    },)

  return (
        <div>

        <HeaderMenuStyled>
            <HeaderPage onClick={() => scrollUp()} to='/movie-searcher-react-ts'>
                <Home/>
            </HeaderPage>
            <HeaderPage onClick={() => scrollUp()} to='/favourites'>
                <Favourites/>
            </HeaderPage>

            <SearchPage>
                <Search/>
            </SearchPage>
        </HeaderMenuStyled>

            <Outlet/>
    </div>
  )
}
