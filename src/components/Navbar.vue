<template>
	<header class="header">
		<div class="container">
			<div class="header__row">
				<div :class="[ 'header__burger', { active: isActive, }, ]" @click="toggleBurger">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div class="header__title">Api tester</div>
				<nav :class="[ 'header__menu', { active: isActive, }, ]">
					<ul class="header__list">
						<li><router-link to="/" class="header__link">Create request</router-link></li>
						<li v-if="isAuthenticated"><router-link to="/requests" class="header__link" >My requests</router-link></li>
						<li v-if="!isAuthenticated"><router-link to="/auth?type=singup" class="header__link" @click="clearRequestBody">Sing Up</router-link></li>
						<li v-if="!isAuthenticated"><router-link to="/auth?type=singin" class="header__link" @click="clearRequestBody">Sing In</router-link></li>
						<li v-if="isAuthenticated"><a href="#" class="header__link" @click="logout" >Logout</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
import { ref, computed, } from 'vue';
import { useRouter, } from 'vue-router';
import { useStore, } from 'vuex';


export default {
	setup() {
		const store = useStore();
		const router = useRouter();

		const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);

		const isActive = ref(false);
		const toggleBurger = () => {
			isActive.value = !isActive.value;
		};

		const logout = () => {
			store.dispatch('auth/logout');
			router.push('/');
		};

		const clearRequestBody = () => {
			if (isActive.value) {
				isActive.value = !isActive.value;
			}
			store.commit('request/setRequest', null);
		};

		return {
			isActive,
			toggleBurger,
			logout,
			isAuthenticated,
			clearRequestBody,
		};
	},
};
</script>

<style lang="scss">
	.header {
		position: relative;
		padding: 17px 0;
		border-bottom: 1px solid #3B3B3B;

		&:before {
			content: '';
			background: #212121;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 12;
		}

		&__row {
			display: flex;
			justify-content: space-between;
		}
		&__burger {
			display: none;
		}
		&__title {
			z-index: 12;
			font-size: 22px;
			line-height: 22px;
		}
		&__menu {
			z-index: 12;
		}
		&__list {
			display: flex;

			li {
				margin: 0 20px 0 0;
				position: relative;

				&:last-child {
					margin: 0;
				}

			}
		}
		&__link {
			color: #fff;
			font-size: 18px;
			line-height: 18px;
			position: relative;

			&:hover:after {
				content: '';
				display: block;
				height: 2px;
				width: 100%;
				background: #097BED;
				position: absolute;
				bottom: -2px;
			}

			&.active:after {
				content: '';
				display: block;
				height: 2px;
				width: 100%;
				background: #097BED;
				position: absolute;
				bottom: -2px;
			}
		}

		@media (max-width: 767px) {
			&__burger {
				display: block;
				width: 30px;
				height: 20px;
				position: absolute;
				z-index: 13;
				top: 17px;
				right: 10px;

				span {
					position: absolute;
					height: 2px;
					width: 100%;
					left: 0;
					background: #4d4959;
					transition: all 0.3s ease 0s;
				}
				span:nth-child(2) {
					top: 9px;
				}
				span:last-child {
					bottom: 0;
				}

				&.active {
					span:nth-child(2) {
						transform: scale(0);
					}
					span:last-child {
						transform: rotate(45deg);
						bottom: 9px;
					}
					span:first-child {
						transform: rotate(-45deg);
						top: 9px;
					}
					span {
						background: #fff;
					}
				}
			}
			&__menu {
				overflow: auto;
				padding: 100px 0 0 0;
				position: fixed;
				z-index: 10;
				top: -100%;
				left: 0;
				width: 100%;
				height: 100%;
				background: #262626;
				display: flex;
				justify-content: center;
				transition: all 0.3s ease 0s;
				&.active {
					top: 0;
				}
			}
			&__list {
				display: flex;
				flex-direction: column;
				align-items: center;

				li {
					margin: 0 0 45px 0 !important;

				}
			}
			&__link {
				color: white;
				font-size: 22px;
			}
		}
	}
</style>