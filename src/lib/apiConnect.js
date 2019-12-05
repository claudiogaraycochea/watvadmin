import axios from 'axios';

export const ContentTypes = {
	json: 'application/json',
	formData: 'multiplart/form-data',
	html: 'text/html',
};

// More info: https://github.com/axios/axios
export function request(method, endpoint, data = {}, headers = { 'content-type': ContentTypes.json }, other) {
	const url = `http://localhost:3000/api${endpoint}`;
	const options = {
		method,
		url,
		data,
		headers,
		...other,
	};
	return axios(options);
}
