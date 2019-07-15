import API from './api'

const setLoading = (value) => {
	return {
		type: 'EVENTS_SET_LOADING',
		value
	}
}

const setEvents = (value) => {
	return {
		type: 'EVENTS_SET',
		value
	}
}

export const setScrollToTop = (value) => {
	return {
		type: 'EVENTS_SCROLL_TOP',
		value
	}
}

export const fetchEvents = () => {
	return async (dispatch, getState) => {
		dispatch(setLoading(true));

		let result = await API.get(getState().auth, 'events');

		if (result && result.status === 0) {
			dispatch(setEvents(result.events));
		} else {
			dispatch(setLoading(false));
		}
	}
}
