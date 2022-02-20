import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'
import { movieReducer } from './reducers'
import { configureStore } from '@reduxjs/toolkit'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
  reducer: movieReducer,
  middleware: middleware
})

sagaMiddleware.run(rootSaga)
