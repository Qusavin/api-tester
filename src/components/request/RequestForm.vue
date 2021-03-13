<template>
	<form class="request-creator__form" @submit.prevent="submit">
		<div class="request-creator__input">
			<select v-model="method" id="method">
				<option value="get">GET</option>
				<option value="post">POST</option>
			</select>

			<input type="text" v-model="url" id="url">
		</div>

		<button class="btn" type="submit">Send</button>
	</form>
</template>

<script>
import { ref, } from 'vue';
import { useStore, } from 'vuex';


export default {
	setup() {
		const store = useStore();

		const method = ref('get');
		const url = ref(null);

		const submit = () => {
			store.dispatch('request/createRequest', {
				method: method.value,
				url   : url.value,
			});
			method.value = 'get';
			url.value = null;
		};

		return {
			method,
			url,
			submit,
		};
	},
};
</script>

<style lang="scss">
.request-creator {
	&__input {
		flex: 1 1 84%;
		display: flex;
		width: 100%;
	}

	&__form {
		display: flex;

		select {
			background: #2B2B2B;
			color: #fff;
			padding: 15px 20px 14px 16px;
			font-size: 13px;
			line-height: 13px;
			border-radius: 5px 0 0 5px;
			border: 1px solid #3B3B3B;
			border-right: 0px;
			font-weight: 600;
			flex: 0 0 16%;
		}

		input {
			background: #2B2B2B;
			color: #fff;
			font-size: 16px;
			line-height: 16px;
			border-radius: 0 5px 5px 0;
			border: 1px solid #3B3B3B;
			flex: 1 1 84%;
			padding: 15px 6px 14px 6px;
			margin: 0 10px 0 0;
			width: 100%;
		}

		.btn {
			flex: 0 0 72px;
			border-radius: 8px;
			background: #097BED;
			color: #fff;
			font-size: 14px;
			font-weight: 600;
		}
		margin: 0 0 10px 0;
	}

	@media (max-width: 577px) {
		&__form {
			flex-direction: column;

			input {
				margin: 0;
			}

			.btn {
				flex: 1 1 100%;
				padding: 15px 0;
			}
		}

		&__input {
			margin: 0 0 10px 0;
		}
	}
}

</style>