<template>
	<div class="login relative">
		<div class="absolute bg_image" style="top: 0px;">
			<el-carousel :interval="4000" :height="height">
				<el-carousel-item v-for="(item, index) in banner" :key="index">
					<div class="img_background" :style="'background:url(' + item.pic + ')'"></div>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="absolute" style="width: 100%;z-index: 99;">
			<div class="login_form ">
				<div class="text_center welcome">欢迎登录</div>
				<el-form label-position="right" label-width="50px" :model="loginForm">
					<el-form-item label="账户">
						<el-input v-model="loginForm.name"></el-input>
					</el-form-item>
					<el-form-item label="密码">
						<el-input v-model="loginForm.pwd"></el-input>
					</el-form-item>
					<el-form-item label="">
						<div class="flex flex_between">
							<CheckBox
								:checked="loginChecked"
								size="18px"
								color="#000"
								@checkClick="checkClick"
							>
								<span style="padding-left:5px ;">记住密码</span>
							</CheckBox>
							<div class="goReset">忘记密码</div>
						</div>
					</el-form-item>
				</el-form>
				<div class="btn">
					<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
					<div
						class="text_center pointer"
						style="padding:20px 0;font-size: 14px;"
						@click="goRegoster"
					>
						去注册
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import CheckBox from '../components/CheckBox';
export default {
	components: {
		CheckBox
	},
	name: 'login',
	data() {
		return {
			input: '123',
			height: this.$store.state.h + 'px',
			loginChecked: false,
			loginForm: {
				name: '',
				pwd: ''
			},
			checked: true,
			banner: [
				{
					pic: require('../assets/login/1.jpg'),
					alt: '1'
				},
				{
					pic: require('../assets/login/3.jpg'),
					alt: '2'
				},
				{
					pic: require('../assets/login/2.jpg'),
					alt: '3'
				},
				{
					pic: require('../assets/login/4.jpg'),
					alt: '4'
				}
			]
		};
	},
	methods: {
		submitForm: async function() {
			// 			const requestConfig = {
			// 				apiUrl: 'login',
			// 				params: this.loginForm,
			// 				typ: 'post'
			// 			};
			// 			const getResult = await this.$store.dispatch('apiRequest', requestConfig);
			// 			console.log(getResult)
			this.isRememeberPwd();
			this.$store.commit('login');
			this.$router.push('/index');
		},
		checkClick(r) {
			this.loginChecked = r;
			this.isRememeberPwd();
		},
		goRegoster() {
			this.$router.push('/register');
		},
		goReset() {},
		isRememeberPwd() {
			if (this.loginChecked) {
				localStorage.setItem('loginMess', JSON.stringify(this.loginForm));
			} else {
				localStorage.setItem('loginMess', false);
			}
		}
	},
	created() {
		
	},
	mounted() {
		let getLocalStorage = JSON.parse(localStorage.getItem('loginMess'));
		if (getLocalStorage) {	
			this.loginForm = getLocalStorage;
		} 
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.login {
	.login_form {
		width: 500px;
		padding: 50px 20px;
		margin: 100px auto 0 auto;
		background: rgba(255, 255, 255, 0.4);
		.welcome {
			font-size: 36px;
			color: @textc1;
		}
		.el-form {
			padding: 50px 20px 20px 20px;
			.el-form-item {
				margin: 20px 0 40px 0;
				/deep/.el-form-item__label {
					font-size: 24px;
					text-align: center;
					color: @textc1;
				}
				.el-form-item__content {
					.el-input {
						/deep/.el-input__inner {
							width: 80%;
						}
					}
				}
			}
		}

		.btn {
			.el-button {
				width: 80%;
				font-size: 24px;
			}
		}
	}
	.bg_image {
		width: 100%;
	}
	.img_background {
		width: 100%;
		height: 100%;
		background-repeat: no-repeat !important;
		background-position: center center !important;
		background-size: cover !important; //cover contain
	}
	@media screen and (max-width: 768px) {
		.img_background {
			background-position: 30% center !important;
		}
	}
}
</style>
