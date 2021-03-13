import { createStore, } from 'vuex';

import authModule from './modules/auth.module';


export default createStore({
	state() {},
	mutations: {

	},
	actions: {

	},
	getters: {

	},
	modules: {
		auth: authModule,
	},
});