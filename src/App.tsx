import {useDispatch, useSelector} from "react-redux";
import {setMovie} from "./redux/reducers";
import {useEffect} from "react";
import {PopularMovieMain} from "./components/PopularMovie/PopularMovieMain";



export const App = (): JSX.Element => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setMovie(1));
    }, [])

  return (
    <div  className="app_main">
        <PopularMovieMain/>
    </div>
  );
}
