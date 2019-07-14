import API from './api'

export const setIsLoading = (loading) => {
	return {
		type: 'HOME_SET_LOADING',
		loading
	}
}

export const setState = (state) => {
	return {
		type: 'HOME_SET_STATE',
		state
	}
}

export const resetState = () => {
	return {
		type: 'HOME_RESET_STATE'
	}
}

export const fetchHome = () => {
	return async (dispatch, getState) => {
		// set loading state
		dispatch(setIsLoading(true));

		let response = await API.get(getState().auth, 'home');
		
		if (response && response.status === 0) {
			// result ok, set new state
			dispatch(setState({
				penghijauan: response.penghijauan,
				unggahan: response.unggahan,
				kegiatan: response.kegiatan
			}));
		} else {
			// failed, reset state
			dispatch(resetState());
		}
		
		// set loading state to false
		dispatch(setIsLoading(false));
	}
}
