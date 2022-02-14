import {HeaderMenuStyled, HeaderPage, SearchPage} from "./HeaderMenu.styled";
import {Outlet} from "react-router-dom";
import {Search} from "../Search/Search";

export const HeaderMenu = () => {
    return (
        <div>
        <HeaderMenuStyled>
            <HeaderPage to='/movie-searcher-react-ts'>
                Главная
            </HeaderPage>

            <SearchPage>
                <Search/>
            </SearchPage>
        </HeaderMenuStyled>

            <Outlet/>
    </div>
    );
};