import {HeaderMenuStyled, HeaderPage} from "./HeaderMenu.styled";
import {Outlet} from "react-router-dom";

export const HeaderMenu = () => {
    return (
        <div>
        <HeaderMenuStyled>
            <HeaderPage>Home</HeaderPage>
            <HeaderPage>Home</HeaderPage>
            <HeaderPage>Home</HeaderPage>
        </HeaderMenuStyled>
            <Outlet/>
    </div>
    );
};