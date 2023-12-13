import ky from 'ky';

const tempToken = '';

export const client = ky.create({
	prefixUrl: process.env.REACT_APP_API_URL,
	headers: {
		Authorization: `bearer ${tempToken}`,
	},
});
