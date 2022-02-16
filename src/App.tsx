import { useDispatch } from 'react-redux'
import { setPage } from './redux/reducers'
import { useEffect } from 'react'
import { MovieMainRoutes } from './components/MainMovieRoutes/MainMovieRoutes'

export const App = (): JSX.Element => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPage(1))
  }, [])

  return (
    <div className="app_main">
        <MovieMainRoutes/>
    </div>
  )
}
