<template>
	<vue-json-pretty
		v-if="response"
		:data="response"
		:showSelectController="true"
		:showLength="false"
		:showLine="true"
		:showDoubleQuotes="true"
		:highlightSelectedNode="true"
		:selectOnClickNode="true"
		:collapsedOnClickBrackets="true"
		:useCustomLinkFormatter="false"
	/>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';

import 'vue-json-pretty/lib/styles.css';



export default {
	props     : [ 'response', ],
	components: {
		VueJsonPretty,
	},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap');

.vjs-tree__node.has-selector {
	padding: 0 0 0 10px;
	font-family: 'IBM Plex Mono', monospace;
	font-size: 15px;
	line-height: 16px;
	&:hover {
		background: #097bed75;
	}
}
.vjs-value.vjs-value__string {
	color: #097BED;
}

@media (max-width: 480px) {
	.vjs-tree__node.has-selector {
		font-size: 14px;
		line-height: 15px;
	}
}

@media (max-width: 400px) {
	.vjs-tree__node.has-selector {
		font-size: 13px;
		line-height: 14px;
	}
}

@media (max-width: 380px) {
	.vjs-tree__node.has-selector {
		font-size: 11px;
		line-height: 12px;
	}
}
</style>