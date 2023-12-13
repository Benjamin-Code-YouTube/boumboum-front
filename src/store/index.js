import { proxy } from 'valtio';

const state = proxy({
	intro: true,
	stage: 100 / 3,
	step: 1,
	// level: stage * step,
	profile: {
		dateOfBirth: '',
		description: '',
		preferedGenderId: 1,
		avatar: null,
		trackIds: [],
	},
});

export default state;

export let profile = {
	dateOfBirth: '',
	description: '',
	preferedGenderId: 1,
	avatar: null,
};
