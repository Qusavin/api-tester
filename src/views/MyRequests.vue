<template>
	<h1 class="title" v-if="Object.keys(requests).length === 0">
		You have no requests yet. You can create it in the "Create request"
	</h1>
	<div class="requests" v-else>
		<div class="requests__body">
			<request
				v-for="request in requests"
				:key="request.id"
				:url="request.request.url"
				:response="request.response"
				:id="request.id"
			/>
		</div>
	</div>
</template>

<script>
import { computed, } from 'vue';
import { useStore, } from 'vuex';

import Request from '../components/request/Request.vue';


export default {
	setup() {
		const store = useStore();

		const requests = computed(() => store.getters['request/requests']);

		store.dispatch('request/load');


		return {
			requests,
		};
	},
	components: {
		Request,
	},
};
</script>

<style lang="scss" scoped>
.title {
	font-size: 20px;
	text-align: center;
	padding: 20px 0 0 0;
}

.requests {
	margin: 40px 0 0 0;
	&__body { }
}


</style>