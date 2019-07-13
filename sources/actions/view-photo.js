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
	return (dispatch) => {
		dispatch(setIsLoading(true));

		API.get('post', 'get_post', {id}).then(response => {
			if (response.status === 0) {
				dispatch(setPostData(response.post));
			} else {
				dispatch(setPostData(null));
			}
			
			dispatch(setIsLoading(false));
		});
	}
}
