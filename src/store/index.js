import { createStore, createLogger, } from 'vuex';

import authModule from './modules/auth.module';
import requestModule from './modules/request.module';


const userIdLocal = 'api-tester-user-id';
export default createStore({
	state() {
		return {
			userId: localStorage.getItem(userIdLocal),
		};
	},
	mutations: {
		setUserId(state, userId) {
			state.userId = userId;
			localStorage.setItem(userIdLocal, userId);
		},
	},
	actions: {

	},
	getters: {
		userId(state) {
			return state.userId;
		},
	},
	modules: {
		auth   : authModule,
		request: requestModule,
	},
	plugins: [
		createLogger(),
	],
});