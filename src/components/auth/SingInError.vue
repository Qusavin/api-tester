<template>
	<div class="in-error" v-if="error">
		<div class="in-error__title">Unable to login.</div>
		<div class="in-error__text">Please check the spelling of your login and password.</div>
	</div>
</template>

<script>
import { computed, } from 'vue';
import { useStore, } from 'vuex';


export default {
	setup() {
		const store = useStore();

		const error = computed(() => store.getters['auth/singInError']);
		return {
			error,
		};
	},
};
</script>

<style lang="scss" scoped>
.in-error {
	color: #EB6A6C;
	padding: 20px;
	border: 1px solid #EB6A6C;
	border-radius: 6px;
	margin: 0 0 20px 0;

	&__title {
		font-size: 12px;
		line-height: 13px;
		font-weight: 600;
		margin: 0 0 5px 0;
	}
	&__text {
		font-size: 12px;
		line-height: 13px;
	}
}
</style>