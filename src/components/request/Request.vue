<template>
	<div class="request">
		<div class="request__title">
			<div class="request__url" @click="toggleRequest">{{url}}</div>
			<div class="request__url-body">
				<div class="request__data">0:41 22.12.2021</div>
				<i class="fas fa-trash request__remove" @click="remove"></i>
			</div>
		</div>
		<div class="request__body" v-if="showBody">
			<request-boby :response="response" />
		</div>
	</div>
</template>

<script>
import { ref, } from 'vue';
import { useStore, } from 'vuex';

import RequestBoby from './RequestBoby.vue';


export default {
	props: [ 'url', 'response', 'id', ],
	setup(props) {
		const store = useStore();

		const showBody = ref(false);

		const toggleRequest = () => showBody.value = !showBody.value;

		const remove = () => {
			store.dispatch('request/remove', props.id);
		};

		return {
			toggleRequest,
			showBody,
			remove,
		};
	},
	components: {
		RequestBoby,
	},
};
</script>

<style lang="scss">
.request {
	background: #2B2B2B;
	border-radius: 10px;
	margin: 0 0 20px 0;
	&:last-child {
		margin: 0;
	}

	&__title {
		padding: 20px;
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		line-height: 16px;
	}
	&__url {
		cursor: pointer;
	}
	&__url-body {
		display: flex;
	}
	&__data {
		padding: 0 20px 0 0;
	}
	&__remove {
		cursor: pointer;
	}
	&__body {
		border-top: 1px solid #3B3B3B;
		padding: 20px 0;
	}
	@media (max-width: 680px) {
		&__data {
			display: none;
		}
	}
}
</style>