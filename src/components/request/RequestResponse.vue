<template>
	<div class="request-creator__body">
		<div class="request-creator__btn-rows">
			<button class="btn-tab">Body</button>
		</div>
		<div class="request-creator__response">
			<vue-json-pretty
				:data="response"
				:selectableType="single"
				:showSelectController="true"
				:showLength="false"
				:showLine="true"
				:showDoubleQuotes="true"
				:highlightSelectedNode="true"
				:selectOnClickNode="true"
				:collapsedOnClickBrackets="true"
				:useCustomLinkFormatter="false"
				:path="res"
			/>
			<url-error />
		</div>
	</div>
</template>

<script>
import { computed, } from 'vue';
import VueJsonPretty from 'vue-json-pretty';
import { useStore, } from 'vuex';

import UrlError from './UrlError.vue';
import 'vue-json-pretty/lib/styles.css';



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
		VueJsonPretty,
	},
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap');

.vjs-tree__node.has-selector {
	padding: 0 0 0 10px;
	font-family: 'IBM Plex Mono', monospace;
	font-size: 15px;
	line-height: 17px;
	&:hover {
		background: #097bed75;
	}
}
.vjs-value.vjs-value__string {
	color: #097BED;
}

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
		min-height: 200px;
	}

}
</style>