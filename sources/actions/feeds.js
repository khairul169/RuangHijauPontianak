
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

export const fetchFeeds = () => {
	return (dispatch) => {
		dispatch(setIsLoading(true));
		
		setTimeout(() => {
			dispatch(setPosts([2, 3, 4]));
			dispatch(setIsLoading(false));
		}, 2000);
	}
}
