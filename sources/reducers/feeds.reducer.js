
const initialState = {
	posts: [],
	isLoading: false,
	scrollToTop: false
}

export const feeds = (state = initialState, action) => {
	switch (action.type) {
		case 'FEEDS_SET_POSTS':
			return {...state, posts: action.value};
		case 'FEEDS_IS_LOADING':
			return {...state, isLoading: action.value};
		case 'FEEDS_SCROLL_TO_TOP':
			return {...state, scrollToTop: action.scroll};
		default:
			return state;
	}
}
