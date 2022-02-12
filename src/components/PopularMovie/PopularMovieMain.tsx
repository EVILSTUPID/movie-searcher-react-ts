import {Route, Routes} from "react-router-dom";
import {HeaderMenu} from "../HeaderMenu/HeaderMenu";
import {PopularMovie} from "./PopularMovie";
import {PopularMovieInfo} from "./PopularMovieInfo";

export const PopularMovieMain = (): JSX.Element => {

    return (
        <div  className="app_main">
            <Routes>
                <Route path='/' element={<HeaderMenu/>}>
                    <Route path='/movie-searcher-react-ts' element={<PopularMovie/>} />
                    <Route path='/info' element={<PopularMovieInfo/>}/>
                </Route>
            </Routes>
        </div>
    );
}