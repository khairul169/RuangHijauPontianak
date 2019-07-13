import React, { Component } from 'react'
import AppRoutes from './sources/routes'
import { Provider } from 'react-redux'
import reduxStore from './sources/reducers'

export default class App extends Component {
	render() {
		return (
			<Provider store={reduxStore}>
				<AppRoutes />
			</Provider>
		)
	}
}
