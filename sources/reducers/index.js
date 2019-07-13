import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// reducers
import { feeds } from './feeds.reducer'

const reducers = combineReducers({
	feeds
})

export default createStore(reducers, applyMiddleware(thunk))
