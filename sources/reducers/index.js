import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// reducers
import { auth } from './auth.reducer'
import { home } from './home.reducer'
import { feeds } from './feeds.reducer'
import { viewPhoto } from './view-photo.reducer'

const reducers = combineReducers({
	auth,
	home,
	feeds,
	viewPhoto
})

export default createStore(reducers, applyMiddleware(thunk))
