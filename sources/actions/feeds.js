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
	return (dispatch) => {
		dispatch(setIsLoading(true));

		API.get('feeds', 'get_posts').then(response => {
			if (response.status === 0) {
				dispatch(setPosts(response.posts));
			}
			
			dispatch(setIsLoading(false));
		});
	}
}
