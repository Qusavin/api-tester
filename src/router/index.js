import { createRouter, createWebHistory, } from 'vue-router';

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
];

const router = createRouter({
	history             : createWebHistory(),
	routes,
	linkActiveClass     : 'active',
	linkExactActiveClass: 'active',
});

export default router;
