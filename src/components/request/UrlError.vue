<template>
	<div class="url-error" v-if="urlError">
		<div class="url-error__title">Could not send request</div>
		<div class="url-error__text">Url address is invalid</div>
	</div>
</template>

<script>
import { computed, } from 'vue';
import { useStore, } from 'vuex';


export default {
	setup() {
		const store = useStore();
		const urlError = computed(() => store.getters.urlError);
		return {
			urlError,
		};
	},
};
</script>

<style lang="scss" scoped>
.url-error {
	color: #EB6A6C;
	padding: 40px 0 0 0;
	border-radius: 6px;
	text-align: center;
	vertical-align: center;

	&__title {
		font-size: 14px;
		line-height: 15px;
		font-weight: 600;
		margin: 0 0 5px 0;
	}
	&__text {
		font-size: 14px;
		line-height: 15px;
	}
}
</style>