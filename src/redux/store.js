import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { fakeStoreItemsReducer } from './fakeStoreItems'

const allReducers = combineReducers({
    fakeStoreItemsReducer
})

const store = createStore(allReducers, applyMiddleware(thunk, logger))

export default store