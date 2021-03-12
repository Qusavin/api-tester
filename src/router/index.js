import { createRouter, createWebHistory, } from 'vue-router';

import Home from '../views/Home.vue';


const routes = [
	{
		path     : '/',
		name     : 'Home',
		component: Home,
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
	history: createWebHistory(),
	routes,
});

export default router;
