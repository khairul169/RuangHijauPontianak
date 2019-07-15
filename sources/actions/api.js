
const DEBUG_RESULT = true;
const API_URL = 'http://192.168.43.48/rhp/api/';
//const API_URL = 'http://192.168.137.1/rhp/api/';

class API {
	static getUrl = (route, action) => {
		return API_URL + `?r=${route}&action=${action}`;
	}

	static getHeaders = (state, post = false) => {
		let headers = {
			'Accept': 'application/json',
			'Content-Type': post ? 'multipart/form-data' : 'application/json'
		};
	
		if (state && state.sessionId) {
			headers['Authorization'] = 'Bearer ' + state.sessionId;
		}
		
		return headers;
	}

	static get = async (auth, route, action, args = null) => {
		let url = API.getUrl(route, action);

		if (args) {
			for (var key in args) {
				url += `&${key}=${args[key]}`;
			}
		}

		return fetch(url, {
			method: 'GET',
			headers: API.getHeaders(auth)
		})
		.then(response => response.text())
		.then(response => {
			try {
				const json = JSON.parse(response);
				DEBUG_RESULT && console.log(json);
				return json;
			} catch (error) {
				return Promise.reject({message: error + response});
			}
		})
		.catch((error) => {
			console.log(error.message);
			return null;
		});
	}

	static post = async (auth, route, action, data = null) => {
		const url = API.getUrl(route, action);
		let formData = new FormData();

		if (data) {
			for (var key in data) {
				formData.append(key, data[key]);
			}
		}

		return fetch(url, {
			method: 'POST',
			headers: API.getHeaders(auth, true),
			body: formData
		})
		.then(response => response.text())
		.then(response => {
			try {
				const json = JSON.parse(response);
				DEBUG_RESULT && console.log(json);
				return json;
			} catch (error) {
				return Promise.reject({message: error + response});
			}
		})
		.catch((error) => {
			console.log(error.message);
			return null;
		});
	}
}

export default API;
