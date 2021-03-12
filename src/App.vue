<template>
	<component :is="layout + '-layout'" />
</template>

<script>
import { computed, } from 'vue';
import { useRoute, } from 'vue-router';

import AuthLayout from './layouts/AuthLayout.vue';
import MainLayout from './layouts/MainLayout.vue';


export default {
	setup() {
		const route = useRoute();

		const layout = computed(() => route.meta.layout);

		return {
			layout,
		};
	},
	components: {
		AuthLayout,
		MainLayout,
	},
};
</script>

<style scoped>
	.mod {
		background: #212121;
	}
</style>