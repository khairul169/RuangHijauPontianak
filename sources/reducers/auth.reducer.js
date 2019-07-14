
const initialState = {
	loggedIn: false,
	sessionId: null,
	isLoading: false
}

export const auth = (state = initialState, action) => {
	switch (action.type) {
		case 'AUTH_SET_STATE':
			return {...state, ...action.state};
		case 'AUTH_CLEAR_STATE':
			return {...initialState};
		default:
			return state;
	}
}
