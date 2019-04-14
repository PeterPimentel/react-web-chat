import axios from 'axios';
const BASE_URL = 'http://localhost:3978';

export default class API {
	static post(path, body) {
		return axios.post(`${BASE_URL}${path}`, body)
			.then(response => {
				return response
			})
			.catch(error => {
				return error
			});
	}
}
