
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
		case 'VIEWPHOTO_SET_LIKES':
			if (state.postData) {
				return {...state, postData: {
					...state.postData,
					likes: action.likes,
					liked: action.liked
				}};
			} else {
				return state
			}
		default:
			return state;
	}
}
