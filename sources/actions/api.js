
const baseUrl = 'http://192.168.43.48/rhp/api/';

class API {
	static get = async (route, action, args = null) => {
		let url = baseUrl + `?r=${route}&action=${action}`;
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
}

export default API;
