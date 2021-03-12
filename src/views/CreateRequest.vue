<template>
	<div class="request-creator">
		<div class="request-creator__row">
			<request-from />
			<request-response />
		</div>
	</div>
</template>

<script>
import RequestFrom from '../components/request/RequestForm.vue';
import RequestResponse from '../components/request/RequestResponse.vue';


export default {
	components: {
		RequestFrom,
		RequestResponse,
	},
};
</script>

<style lang="scss" scoped>
.request-creator {
	max-width: 780px;
	padding: 20px 15px 20px 15px;
	border: 1px solid #3B3B3B;
	border-radius: 5px;
	margin: 20px auto 0 auto;
}
</style>
