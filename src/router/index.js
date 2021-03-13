import { createRouter, createWebHistory, } from 'vue-router';

import store from '../store';
import CreateRequest from '../views/CreateRequest.vue';


const routes = [
	{
		path     : '/',
		name     : 'CreateRequest',
		component: CreateRequest,
		meta     : {
			layout      : 'main',
			authRequired: false,
		},
	},
	{
		path     : '/auth',
		name     : 'Auth',
		component: () => import('../views/Auth.vue'),
		meta     : {
			layout      : 'auth',
			authRequired: false,
		},
	},
	{
		path     : '/requests',
		name     : 'MyRequests',
		component: () => import('../views/MyRequests.vue'),
		meta     : {
			layout      : 'main',
			authRequired: true,
		},
	},
];

const router = createRouter({
	history             : createWebHistory(),
	routes,
	linkActiveClass     : 'active',
	linkExactActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
	const requiredAuth = to.meta.requiredAuth;

	if (requiredAuth && store.getters['auth/isAuthenticated']) {
		next();
	} else if (!requiredAuth && store.getters['auth/isAuthenticated']) {
		if (to.path === '/auth') {
			next('/');
		} else {
			next();
		}
	} else if (requiredAuth && !store.getters['auth/isAuthenticated']) {
		next('/auth?message=auth');
	} else {
		next();
	}
});

export default router;
