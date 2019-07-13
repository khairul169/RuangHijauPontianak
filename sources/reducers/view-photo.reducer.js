
const initialState = {
	isLoading: false,
	postData: null
}

export const viewPhoto = (state = initialState, action) => {
	switch (action.type) {
		case 'VIEWPHOTO_SET_LOADING':
			return {...state, isLoading: action.loading};
		case 'VIEWPHOTO_SET_POSTDATA':
			return {...state, postData: action.data};
		default:
			return state;
	}
}
