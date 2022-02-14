import {Route, Routes} from "react-router-dom";
import {HeaderMenu} from "../HeaderMenu/HeaderMenu";
import {PopularMovie} from "../PopularMovie/PopularMovie";
import {SelectedMovieInfo} from "../SelectedMovieInfo/SelectedMovieInfo";

export const MovieMain = (): JSX.Element => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<HeaderMenu/>}>
                    <Route path='/movie-searcher-react-ts' element={<PopularMovie/>} />
                    <Route path='/info' element={<SelectedMovieInfo/>}/>
                </Route>
            </Routes>
        </div>
    );
}