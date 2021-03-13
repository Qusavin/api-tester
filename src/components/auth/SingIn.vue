<template>
	<form class="auth__body" @submit.prevent="submit" novalidate>
		<sing-in-error />
		<input
			:class="{ error: eErr, }"
			type="email"
			id="email"
			placeholder="Email"
			v-model="eVal"
			@blur="eBlur"
		>
		<p class="errorMessage" v-if="eErr">{{eErr}}</p>

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
		>Sing In</button>
	</form>
</template>

<script>
import { useForm, useField, } from 'vee-validate';
import { useRouter, }  from 'vue-router';
import { useStore, } from 'vuex';
import * as yup from 'yup';

import SingInError from './SingInError.vue';


export default {
	setup() {
		const store = useStore();
		const router = useRouter();

		const { isSubmitting, handleSubmit, } = useForm();

		const { value: eVal, errorMessage: eErr, handleBlur: eBlur, } = useField(
			'email',
			yup
				.string()
				.required('Please enter your username')
		);
		const { value: pVal, errorMessage: pErr, handleBlur: pBlur, } = useField(
			'password',
			yup
				.string()
				.required('Please enter your password')
				.min(6, 'Password cannot be less than 6 characters')
		);

		const submit = handleSubmit(async values => {
			try {
				await store.dispatch('auth/singin', values);
				router.push('/');
			} catch (e) {
			}
		});

		return {
			eVal,
			pVal,
			eErr,
			pErr,
			eBlur,
			pBlur,
			isSubmitting,
			submit,
		};
	},
	components: {
		SingInError,
	},
};
</script>

<style></style>