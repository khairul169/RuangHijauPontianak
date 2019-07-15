import API from './api'
import DataStorage from '../data-storage'

const setLoading = () => {
	return {
		type: 'AUTH_SET_LOADING'
	}
}

const setLoaded = () => {
	return {
		type: 'AUTH_SET_LOADED'
	}
}

const setSessionId = (session) => {
	return {
		type: 'AUTH_SET_SESSION',
		session
	}
}

export const clearState = () => {
	return {
		type: 'AUTH_CLEAR_STATE'
	}
}

export const fetchLogin = ({username, password}) => {
	return async (dispatch) => {
		dispatch(setLoading());

		let response = await API.post(null, 'auth', 'login', {
			username,
			password
		});
		
		if (response && response.status === 0 && response.sessionId !== null) {
			// store session
			await DataStorage.storeData(DataStorage.sessionId, response.sessionId);

			// set session
			dispatch(setSessionId(response.sessionId));
		} else {
			dispatch(setLoaded());
		}
	}
}

export const fetchRegister = ({fullName, username, password}) => {
	return async (dispatch) => {
		dispatch(setLoading());

		let response = await API.post(null, 'auth', 'register', {
			fullName,
			username,
			password
		});
		
		if (response && response.status === 0 && response.sessionId !== null) {
			// store session
			await DataStorage.storeData(DataStorage.sessionId, response.sessionId);

			// set state
			dispatch(setSessionId(response.sessionId));
		} else {
			dispatch(setLoaded());
		}
	}
}

export const validateSession = () => {
	return async (dispatch) => {
		dispatch(setLoading());

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
			// store session
			await DataStorage.storeData(DataStorage.sessionId, sessionId);

			// set state
			dispatch(setSessionId(sessionId));
		} else {
			dispatch(setLoaded());
		}
	}
}
