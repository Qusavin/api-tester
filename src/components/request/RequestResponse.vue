<template>
	<div class="request-creator__body">
		<div class="request-creator__btn-rows">
			<button class="btn-tab">Body</button>
		</div>
		<div class="request-creator__response">
			<request-boby :response="response" />
			<url-error />
		</div>
	</div>
</template>

<script>
import { computed, } from 'vue';
import { useStore, } from 'vuex';

import RequestBoby from './RequestBoby.vue';
import UrlError from './UrlError.vue';



export default {
	setup() {
		const store = useStore();

		const response = computed(() => store.getters['request/requestResponse']);

		return {
			response,
		};
	},
	components: {
		UrlError,
		RequestBoby,
	},
};
</script>

<style lang="scss">


.request-creator {
	&__body {
		border: 1px solid #3B3B3B;
		border-radius: 5px;
	}
	&__btn-rows {
		margin: 8px 8px 10px 8px;
		.btn-tab {
			background: none;
			color: #fff;
			padding: 5px;
			position: relative;

			&:after {
				content: '';
				display: block;
				width: 100%;
				height: 2px;
				background: #097BED;
				position: absolute;
				bottom: 0;
				left: 0;
			}
		}
	}
	&__response {
		border-top: 1px solid #3B3B3B;
		padding: 8px;
		min-height: 30vh;
	}

}
</style>