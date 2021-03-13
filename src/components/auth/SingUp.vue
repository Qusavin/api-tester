<template>
	<form class="auth__body" @submit.prevent="submit">
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
		>Sing Up</button>
	</form>
</template>

<script>
import { useForm, useField, } from 'vee-validate';
import { useRouter, } from 'vue-router';
import { useStore, } from 'vuex';
import * as yup from 'yup';


export default {
	setup() {
		const store = useStore();
		const router = useRouter();


		const { isSubmitting, handleSubmit, } = useForm();

		const { value: eVal, errorMessage: eErr, handleBlur: eBlur, } = useField(
			'email',
			yup
				.string()
				.email('Please enter a valid email address')
				.required('Please enter your email address')
		);
		const { value: uVal, errorMessage: uErr, handleBlur: uBlur, } = useField(
			'username',
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

		const submit = handleSubmit(values => {
			try {
				store.dispatch('auth/singup', values);
				router.push('/');
			} catch (e) {
				console.log(e);
			}
		});

		return {
			eVal,
			uVal,
			pVal,
			eErr,
			uErr,
			pErr,
			eBlur,
			uBlur,
			pBlur,
			isSubmitting,
			submit,
		};
	},

};
</script>

<style>

</style>