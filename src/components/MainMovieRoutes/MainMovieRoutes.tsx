import { Route, Routes } from 'react-router-dom'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'
import { SelectedMovieInfo } from '../SelectedMovieInfo/SelectedMovieInfo'
import { MainMovie } from '../MainMovie/MainMovie'

export const MovieMainRoutes = (): JSX.Element => {
  return (
        <div>
            <Routes>
                <Route path='/' element={<HeaderMenu/>}>
                    <Route path='/movie-searcher-react-ts' element={<MainMovie/>} />
                    <Route path='/info' element={<SelectedMovieInfo/>}/>
                </Route>
            </Routes>
        </div>
  )
}
