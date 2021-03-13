import axios from '../../axios/request';
import store from '../index';


export default {
	namespaced: true,
	state() {
		return {
			requests: [],
			request : {
				request : null,
				response: null,
			},
			urlError: null,
		};
	},
	mutations: {
		setRequest(state, req) {
			state.request = req;
			state.requests.push(req);
		},
	},
	actions: {
		async createRequest({ commit, }, { method, url, }) {
			try {
				const token = store.getters['auth/token'];
				const userId = store.getters.userId;

				const { data: requestData, } = await axios[method](url);
				const newRequest = {
					request : { method, url, },
					response: requestData,
				};
				await axios.post(`/users/${userId}/request.json?auth=${token}`, newRequest);
				commit('setRequest', newRequest);

			} catch (e) {
				console.log(e);
			}

		},
	},
	getters: {
		requestResponse(state) {
			return state.request.response;
		},
		urlError(state) {
			return state.urlError;
		},
	},
};