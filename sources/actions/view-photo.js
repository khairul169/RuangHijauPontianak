import API from './api'

export const setIsLoading = (loading) => {
	return {
		type: 'VIEWPHOTO_SET_LOADING',
		loading
	}
}

export const setPostData = (data) => {
	return {
		type: 'VIEWPHOTO_SET_POSTDATA',
		data
	}
}

export const fetchData = (id) => {
	return async (dispatch, getState) => {
		// set loading state
		dispatch(setIsLoading(true));

		let response = await API.get(getState().auth, 'post', 'get_post', {id});
		
		if (response && response.status === 0) {
			// set post data
			dispatch(setPostData(response.post));
		} else {
			// reset data
			dispatch(setPostData(null));
		}
		
		// set loading state
		dispatch(setIsLoading(false));
	}
}
