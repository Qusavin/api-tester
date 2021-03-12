<template>
	<div class="auth">
		<div class="auth__row">
			<div class="auth__title">Api tester</div>
			<div class="auth__tabs">
				<button :class="[ 'tab', { active: isSingIn, }]" @click="toggleTabs('singin')">Sing In</button>
				<button :class="[ 'tab', { active: !isSingIn, }]" @click="toggleTabs('singup')">Sing Up</button>
			</div>
			<form class="auth__body" @submit.prevent="submit">
				<input
					:class="{ error: eErr, }"
					type="email"
					id="email"
					placeholder="Email"
					v-if="!isSingIn"
					v-model="eVal"
					@blur="eBlur"
				>
				<p class="errorMessage" v-if="eErr && !isSingIn">{{eErr}}</p>

				<input
					:class="{ error: uErr, }"
					type="text"
					id="username"
					placeholder="Username"
					v-model="uVal"
					@blur="uBlur"
				>
				<p class="errorMessage" v-if="uErr">{{uErr}}</p>

				<input
					:class="{ error: pErr, }"
					type="password"
					id="password"
					placeholder="Password"
					v-model="pVal"
					@blur="pBlur"
				>
				<p class="errorMessage" v-if="pErr">{{pErr}}</p>

				<button
					class="btn"
					type="submit"
					:disabled="isSubmitting"
				>{{ isSingIn ? 'Sing In' : 'Sing Up' }}</button>
			</form>
		</div>
	</div>
</template>

<script>
import { useAuthForms, } from '../use/auth-forms';


export default {
	setup() {
		const fn = () => {};

		return {
			...useAuthForms(fn),
		};
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