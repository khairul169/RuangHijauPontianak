import API from './api'
import DataStorage from '../data-storage'

const setState = (state) => {
	return {
		type: 'AUTH_SET_STATE',
		state
	}
}

export const clearState = () => {
	return {
		type: 'AUTH_CLEAR_STATE'
	}
}

export const fetchLogin = ({username, password}) => {
	return async (dispatch) => {
		dispatch(setState({isLoading: true}));

		let response = await API.post(null, 'auth', 'login', {
			username,
			password
		});
		
		if (response && response.status === 0 && response.sessionId !== null) {
			await DataStorage.storeData(DataStorage.sessionId, response.sessionId);

			dispatch(setState({
				loggedIn: true,
				sessionId: response.sessionId
			}));
		}

		dispatch(setState({isLoading: false}));
	}
}

export const fetchRegister = ({fullName, username, password}) => {
	return async (dispatch) => {
		dispatch(setState({isLoading: true}));

		let response = await API.post(null, 'auth', 'register', {
			fullName,
			username,
			password
		});
		
		if (response && response.status === 0 && response.sessionId !== null) {
			await DataStorage.storeData(DataStorage.sessionId, response.sessionId);

			dispatch(setState({
				loggedIn: true,
				sessionId: response.sessionId
			}));
		}

		dispatch(setState({isLoading: false}));
	}
}

export const validateSession = () => {
	return async (dispatch) => {
		dispatch(setState({isLoading: true}));

		let loginSuccess = false;
		let sessionId = await DataStorage.getData(DataStorage.sessionId);
		
		if (sessionId) {
			const response = await API.post(null, 'auth', 'validate_session', {sessionId});

			if (response && response.status === 0) {
				loginSuccess = true;
				sessionId = response.sessionId !== null ? response.sessionId : sessionId;
			}
		}

		if (loginSuccess) {
			await DataStorage.storeData(DataStorage.sessionId, sessionId);

			dispatch(setState({
				loggedIn: true,
				sessionId
			}));
		} else {
			dispatch(setState({
				loggedIn: false,
				sessionId: null
			}));
		}

		dispatch(setState({isLoading: false}));
	}
}
