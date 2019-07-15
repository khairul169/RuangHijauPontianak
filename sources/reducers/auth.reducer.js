
const initialState = {
	loaded: false,
	sessionId: null,
	isLoading: false
}

export const auth = (state = initialState, action) => {
	switch (action.type) {
		case 'AUTH_SET_LOADING':
			return {...state, isLoading: true, loaded: false};
		case 'AUTH_SET_LOADED':
			return {...state, isLoading: false, loaded: true};
		case 'AUTH_SET_SESSION':
			return {...state, isLoading: false, loaded: true, sessionId: action.session};
		case 'AUTH_CLEAR_STATE':
			return {...initialState};
		default:
			return state;
	}
}
