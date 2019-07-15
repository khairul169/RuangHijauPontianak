import API from './api'

const setIsLoading = (loading) => {
	return {
		type: 'VIEWPHOTO_SET_LOADING',
		loading
	}
}

const setPostData = (data) => {
	return {
		type: 'VIEWPHOTO_SET_POSTDATA',
		data
	}
}

const setLikes = (likes, liked) => {
	return {
		type: 'VIEWPHOTO_SET_LIKES',
		likes,
		liked
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

export const likePost = (id) => {
	return async (dispatch, getState) => {
		let response = await API.get(getState().auth, 'post', 'like', {id});
		
		if (response && response.status === 0) {
			// refresh post
			dispatch(setLikes(
				response.likes,
				response.liked
			));
		}
	}
}
