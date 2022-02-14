import {useDispatch} from "react-redux";
import {setPage} from "./redux/reducers";
import {useEffect} from "react";
import {MovieMain} from "./components/MainMovie/MainMovie";


export const App = (): JSX.Element => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPage(1));
    }, [])

  return (
    <div  className="app_main">
        <MovieMain/>
    </div>
  );
}
