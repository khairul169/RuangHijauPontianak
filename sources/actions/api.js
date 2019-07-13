
const baseUrl = 'http://192.168.43.48/rhp/api/';

const getUrl = (route, action) => {
	return baseUrl + `?r=${route}&action=${action}`;
}

class API {
	static get = async (route, action, args = null) => {
		let url = getUrl(route, action);

		if (args) {
			for (var key in args) {
				url += `&${key}=${args[key]}`;
			}
		}

		return fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
   				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => {
			return json;
		})
		.catch((error) => {
			console.log(error.message);
			return null;
		});
	}

	static post = async (route, action, data = null) => {
		const url = getUrl(route, action);
		let formData = new FormData();

		if (data) {
			for (var key in data) {
				formData.append(key, data[key]);
			}
		}

		return fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
   				'Content-Type': 'multipart/form-data'
			},
			body: formData
		})
		.then(response => response.json())
		.then(json => {
			return json;
		})
		.catch((error) => {
			console.log(error.message);
			return null;
		});
	}
}

export default API;
