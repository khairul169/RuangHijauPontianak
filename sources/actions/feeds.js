import API from './api'

export const setPosts = (posts) => {
	return {
		type: 'FEEDS_SET_POSTS',
		value: posts
	}
}

export const setIsLoading = (loading) => {
	return {
		type: 'FEEDS_IS_LOADING',
		value: loading
	}
}

export const setScrollToTop = (scroll) => {
	return {
		type: 'FEEDS_SCROLL_TO_TOP',
		scroll
	}
}

export const fetchFeeds = () => {
	return (dispatch, getState) => {
		// set loading state
		dispatch(setIsLoading(true));

		let response = API.get(getState().auth, 'feeds', 'get_posts');
		
		if (response && response.status === 0) {
			// set new posts state
			dispatch(setPosts(response.posts));
		}
		
		// set loading state
		dispatch(setIsLoading(false));
	}
}
