<template>
	<div class="login relative">	
		<div class="absolute bg_image" style="top: 0px;">
			<el-carousel :interval="4000" :height="height">
				<el-carousel-item v-for="(item, index) in banner" :key="index">
					<div
						class="img_background"
						:style="'background:url(' + item.pic + ')'"
					></div>
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
				<!-- 	<el-form-item label="">
						<div class="flex flex_between cz" >
							<el-checkbox v-model="checked">记住密码</el-checkbox>
							<div>忘记密码</div>
						</div>
					</el-form-item> -->
				</el-form>
				<div class="btn">
					<el-button type="primary" @click="submitForm('ruleForm')" 
						>登录</el-button
					>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
export default {
	name: 'login',
	data() {
		return {
			input: '123',
			height:this.$store.state.h+'px',
			loginForm: {
				name: '185xxxxxxxx',
				pwd: '123456'
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
			this.$store.commit('login')
			this.$router.push('/index');
		}
	},
	mounted() {
		// console.log(this.$store.state.h)
		
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.login {
	
	.login_form {
		width:500px;
		padding: 50px 20px;
		margin:100px auto 0 auto;
		background: rgba(255,255,255,0.4);
		.welcome{
			font-size: 36px;
			color: @textc1;
		}
		.el-form{
			padding: 50px 20px;
			.el-form-item{
				margin:20px 0 40px 0;
				/deep/.el-form-item__label{
					font-size: 24px;
					text-align: center;
				}
				.el-form-item__content{
					.el-input{
						/deep/.el-input__inner{
							width: 80%;						
						}
						
					}			
				}	
			}
		}
		
		.btn{
			margin-top: 20px;
			.el-button{
				width: 80%;
				font-size: 24px;
			}
		}
	}
	.bg_image{
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
