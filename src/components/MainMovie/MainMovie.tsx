import {MainMovieInfo} from "./MainMovie.styled";
import {PopularMovie} from "../PopularMovie/PopularMovie";
import {HeaderMenu} from "../HeaderMenu/HeaderMenu";

export const MainMovie = (): JSX.Element => {
    return (
        <MainMovieInfo>
            <HeaderMenu/>
            <PopularMovie/>
        </MainMovieInfo>
    )
}