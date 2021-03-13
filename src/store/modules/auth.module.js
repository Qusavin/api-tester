import axios from 'axios';


const JWT_TOKEN = 'api-tester-jwt-token';
const userIdLocal = 'api-tester-user-id';
export default {
	namespaced: true,
	state() {
		return {
			token      : localStorage.getItem(JWT_TOKEN),
			singInError: false,
		};
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
			localStorage.setItem(JWT_TOKEN, token);
		},
		setSingInError(state) {
			state.singInError = true;
		},
		clearSingInError(state) {
			state.singInError = false;
		},
		clearToken(state) {
			state.token = null;
		},
	},
	actions: {
		logout({ commit, }) {
			commit('clearToken');
			localStorage.removeItem(JWT_TOKEN);
			localStorage.removeItem(userIdLocal);
		},
		async singin({ dispatch, commit, }, payload) {
			try {
				const { data, } = await axios.post(
					`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`,
					{ ...payload, returnSecureToken: true, }
				);
				commit('setUserId', data.localId, { root: true, });
				commit('setToken', data.idToken);
			} catch (e) {
				await dispatch('setSingInError', e.response.data.error.message);
				throw new Error();
			}
		},
		async singup({ commit, }, payload) {
			try {
				// Const username = payload.username;
				const newPayload = {
					...Object.keys(payload).reduce((acc, key) => {
						if (key === 'username') {
							return acc;
						}
						acc[key] = payload[key];
						return acc;
					}, {}),
				};
				const { data, } = await axios.post(
					`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_API_KEY}`,
					{ ...newPayload, returnSecureToken: true, }
				);
				commit('setToken', data.idToken);
			} catch (e) {
				console.log(e);
			}
		},
		setSingInError({ commit, }, payload) {
			if (payload) {
				console.log(payload);
				commit('setSingInError');
				setTimeout(() => {
					commit('clearSingInError');
				}, 4000);
			}
		},
	},
	getters: {
		singInError(state) {
			return state.singInError;
		},
		isAuthenticated(state) {
			if (state.token) {
				return true;
			}
			return false;
		},
		token(state) {
			return state.token;
		},
	},
};