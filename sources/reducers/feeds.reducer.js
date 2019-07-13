
const initialState = {
	posts: [],
	isLoading: false
}

export const feeds = (state = initialState, action) => {
	switch (action.type) {
		case 'FEEDS_SET_POSTS':
			return {...state, posts: action.value};
		case 'FEEDS_IS_LOADING':
			return {...state, isLoading: action.value};
		default:
			return state;
	}
}
