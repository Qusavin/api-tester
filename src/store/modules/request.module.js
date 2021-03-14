import axios from '../../axios/request';
import store from '../index';


export default {
	namespaced: true,
	state() {
		return {
			requests: [],
			request : null,
			urlError: null,
		};
	},
	mutations: {
		setRequest(state, req) {
			state.request = req;
		},
		setRequests(state, reqs) {
			state.requests = reqs;
		},
		remove(state, id) {
			state.requests = state.requests.filter(el => el.id !== id);
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
				commit('setRequest', newRequest);
				if (store.getters['auth/isAuthenticated']) {
					await axios.post(`/users/${userId}/request.json?auth=${token}`, newRequest);
				}
			} catch (e) {
				console.log(e);
			}

		},
		async load({ commit, }) {
			try {
				const token = store.getters['auth/token'];
				const userId = store.getters.userId;

				const { data, } = await axios.get(`/users/${userId}/request.json?auth=${token}`);

				const reqs = Object.keys(data).map(key => {
					return {
						id      : key,
						request : data[key].request,
						response: data[key].response,
					};
				});
				commit('setRequests', reqs);
			} catch (e) {
				console.log(e);
			}
		},
		async remove({ commit, }, payload) {
			try {
				const token = store.getters['auth/token'];
				const userId = store.getters.userId;
				const { data, } = await axios.delete(`/users/${userId}/request/${payload}.json?auth=${token}`);
				console.log('removeData:', data);
				commit('remove', payload);
			} catch (e) {
				console.log(e);
			}
		},
	},
	getters: {
		requestResponse(state) {
			return state.request?.response;
		},
		urlError(state) {
			return state.urlError;
		},
		requests(state) {
			return state.requests;
		},
	},
};