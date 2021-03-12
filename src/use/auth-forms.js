import { useForm, useField, } from 'vee-validate';
import { ref, watch, computed, } from 'vue';
import * as yup from 'yup';


export const useAuthForms = (fn) => {
	const tab = ref('singin');
	const isSingIn = computed(() => tab.value === 'singin');

	const eErr = ref(null);
	const uErr = ref(null);
	const pErr = ref(null);

	const { isSubmitting, handleSubmit, } = useForm();

	const { value: eVal, errorMessage: eM, handleBlur: eBlur, } = useField(
		'email',
		yup
			.string()
			.email('Please enter a valid email address')
			.required('Please enter your email address')
	);
	const { value: uVal, errorMessage: uM, handleBlur: uBlur, } = useField(
		'username',
		yup
			.string()
			.required('Please enter your username')
	);
	const { value: pVal, errorMessage: pM, handleBlur: pBlur, } = useField(
		'password',
		yup
			.string()
			.required('Please enter your password')
			.min(6, 'Password cannot be less than 6 characters')
	);

	watch([ eM, uM, pM, ], ([ eN, uN, pN, ]) => {
		eErr.value = eN;
		uErr.value = uN;
		pErr.value = pN;
	});

	const toggleTabs = tabb => {
		tab.value = tabb;
		eErr.value = null;
		uErr.value = null;
		pErr.value = null;
	};

	const submit = handleSubmit(fn);

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
		isSingIn,
		tab,
		toggleTabs,
	};
};