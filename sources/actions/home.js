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
	return (dispatch) => {
		dispatch(setIsLoading(true));

		API.get('home').then(response => {
			if (response.status === 0) {
				dispatch(setState({
					penghijauan: response.penghijauan,
					unggahan: response.unggahan,
					kegiatan: response.kegiatan
				}));
			} else {
				dispatch(resetState());
			}
			
			dispatch(setIsLoading(false));
		});
	}
}
