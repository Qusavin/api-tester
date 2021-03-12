<template>
	<div class="request-creator">
		<div class="request-creator__row">
			<div class="request-creator__form">
				<div class="request-creator__input">
					<select>
						<option value="get">GET</option>
						<option value="post">POST</option>
					</select>

					<input type="text">
				</div>

				<button class="btn">Send</button>
			</div>
			<div class="request-creator__body">
				<div class="request-creator__btn-rows">
					<button class="btn-tab">Body</button>
				</div>
				<div class="request-creator__response"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
	.request-creator {
		max-width: 630px;
		padding: 20px 15px 20px 15px;
		border: 1px solid #3B3B3B;
		border-radius: 5px;
		margin: 20px auto 0 auto;

		&__row { }

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
				flex: 0 0 20%;
			}

			input {
				background: #2B2B2B;
				color: #fff;
				font-size: 16px;
				line-height: 16px;
				border-radius: 0 5px 5px 0;
				border: 1px solid #3B3B3B;
				flex: 1 1 80%;
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

		&__body {
			border: 1px solid #3B3B3B;
			border-radius: 5px;
		}
		&__btn-rows {
			margin: 8px 8px 10px 8px;
			.btn-tab {
				background: none;
				color: #fff;
				padding: 5px;
				position: relative;

				&:hover:after {
					content: '';
					display: block;
					width: 100%;
					height: 2px;
					background: #097BED;
					position: absolute;
					bottom: 0;
					left: 0;
				}
			}
		}
		&__response {
			border-top: 1px solid #3B3B3B;
			padding: 8px;
			min-height: 200px;
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
