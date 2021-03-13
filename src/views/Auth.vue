<template>
	<div class="auth">
		<div class="auth__row">
			<div class="auth__title">Api tester</div>
			<div class="auth__tabs">
				<button :class="[ 'tab', { active: isSingIn, }]" @click="toggleTabs('sing-in')">Sing In</button>
				<button :class="[ 'tab', { active: !isSingIn, }]" @click="toggleTabs('sing-up')">Sing Up</button>
			</div>
			<component :is="tab" />
		</div>
	</div>
</template>

<script>
import { ref, computed, } from 'vue';
import { useRoute, useRouter, } from 'vue-router';

import SingIn from '../components/auth/SingIn.vue';
import SingUp from '../components/auth/SingUp.vue';


export default {
	setup() {
		const route = useRoute();
		const router = useRouter();

		const tab = ref('sing-in');
		const isSingIn = computed(() => tab.value === 'sing-in');

		if (route.query.type === 'singin') {
			tab.value = 'sing-in';
			router.replace({ 'query': null, });
		} else if (route.query.type === 'singup') {
			tab.value = 'sing-up';
			router.replace({ 'query': null, });
		}

		const toggleTabs = tabb => tab.value = tabb;

		return {
			tab,
			isSingIn,
			toggleTabs,
		};
	},
	components: {
		SingIn,
		SingUp,
	},
};
</script>

<style lang="scss">
.errorMessage {
	margin: 2px 0 6px 2px;
	color: crimson;
}

.auth {
	max-width: 470px;
	margin: 90px auto 0 auto;
	border: 1px solid #3B3B3B;
	border-radius: 10px;
	padding: 20px;

	&__row {}

	&__title {
		font-size: 32px;
		line-height: 32px;
		margin: 0 0 10px 0;
		text-align: center;
		padding: 30px 0;
	}

	&__tabs {
		display: flex;
		margin: 0 0 15px 0;

		.tab {
			flex: 1 1 50%;
			width: 100%;
			padding: 10px 0 12px 0;
			background: none;
			color: #fff;
			font-size: 18px;
			line-height: 18px;
			position: relative;

			&.active {
				&:after {
					content: '';
					width: 100%;
					height: 2px;
					position: absolute;
					bottom: 0;
					left: 0;
					background: #097BED;
				}
			}
		}
	}
	&__body {
		display: flex;
		flex-direction: column;

		input {
			margin: 0 0 13px 0;
			padding: 13px 10px;
			font-size: 16px;
			line-height: 18px;
			color: #fff;
			background: #2B2B2B;
			border-radius: 10px;

			&.error {
				margin: 0;
			}

			&:focus {
				border: 1px solid #3B3B3B;
				padding: 12px 9px;
			}
		}

		& .btn {
			padding: 10px;
			border-radius: 10px;
			background: #097BED;
			font-size: 16px;
			line-height: 18px;
			color: #fff;
		}
	}
}

</style>