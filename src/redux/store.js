import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { fakeStoreItemsReducer } from './fakeStoreItems'
import { cardItemReducer } from './cardItem'


const allReducers = combineReducers({
    fakeStoreItemsReducer,
    cardItemReducer
})

const store = createStore(allReducers, applyMiddleware(thunk, logger))

export default store