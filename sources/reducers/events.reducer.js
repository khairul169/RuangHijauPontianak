
const initialState = {
	isLoading: false,
	events: [],
	scrollToTop: false
}

export const events = (state = initialState, action) => {
	switch (action.type) {
		case 'EVENTS_SET_LOADING':
			return {...state, isLoading: action.value};
		case 'EVENTS_SET':
			return {...state, isLoading: false, events: action.value};
		case 'EVENTS_SCROLL_TOP':
			return {...state, scrollToTop: true};
		default:
			return state;
	}
}
