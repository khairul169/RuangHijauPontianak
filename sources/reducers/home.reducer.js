
const initialState = {
	isLoading: false,
	penghijauan: 0,
	unggahan: [],
	kegiatan: null
}

export const home = (state = initialState, action) => {
	switch (action.type) {
		case 'HOME_SET_STATE':
			return {...state, ...action.state};
		case 'HOME_RESET_STATE':
			return { ...state,
				penghijauan: 0,
				unggahan: [],
				kegiatan: null
			};
		default:
			return state;
	}
}
