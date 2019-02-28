<template>
	<div class="register" :style="{ height: height }">
		<div class="common_width flex flex_end">
			<div class="reg_form">
				<div class="reg_title">欢迎注册</div>
				<el-form
					class=""
					label-position="left"
					label-width="70px"
					:model="regForm"
					:rules="formRules"
					ref="regForm"
				>
					<!-- <el-form-item label="手机号">
						<el-input v-model="regForm.phone"></el-input>
					</el-form-item>
					<el-form-item label="验证码">
						<el-input v-model="regForm.sms"></el-input>
					</el-form-item> -->
					<!-- <no-ssr> -->
					<PhoneSms
						ref="phoneSms"
						:formData="regForm"
						:isRequired="true"
						labelPosition="left"
						labelWidth="70px"
					/>
					<!-- </no-ssr> -->
					<el-form-item label="密码" prop="pwd">
						<el-input v-model="regForm.pwd" type="password"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="pwd1">
						<el-input v-model="regForm.pwd1" type="password"></el-input>
					</el-form-item>
					<el-form-item class="flex flex_end">
						已有账号，去 <span @click="goLogin" class="go_login pointer">登录 </span>
					</el-form-item>
				</el-form>
				<div class="btn">
					<el-button type="primary" @click="submitForm('regForm')">注册</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PhoneSms from '../components/PhoneSms';
export default {
	components: {
		PhoneSms
	},
	data() {
		let _this = this;
		return {
			height: this.$store.state.h + 'px',
			regForm: {
				phone: '1851143664',
				sms: '123',
				pwd: '11111',
				pwd1: '12'
			},
			formRules: {
				pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
				pwd1: [
					{
						trigger: ['blur', 'change'],
						validator: (rule, value, callback) => {
							let lengthPwd = _this.regForm.pwd.length;
							if (_this.regForm.pwd) {
								if (value === _this.regForm.pwd) {
									callback();
								} else {
									if (value.length >= lengthPwd) {
										callback(new Error('两次密码不一致'));
									}
								}
							}
						}
					}
				]
			}
		};
	},
	watch: {},
	methods: {
		goLogin() {
			this.$router.push('/index');
		},
		 submitForm(formName) {
			 console.log(this.$refs[formName])
			this.$refs[formName].validate(valid => {
				console.log(valid)
				if (valid) {
					
				} else {
					console.log('ppp')
				}
			});
		}
	},
	created() {},
	mounted() {}
};
</script>

<style scoped lang="less">
.register {
	background: url('../assets/login/7.jpg') no-repeat;
	background-origin: center center;
	background-size: cover;
	.reg_form {
		background: rgba(255, 255, 255, 0.4);
		width: 500px;
		padding: 50px 20px;
		margin-top: 5%;
		.reg_title {
			font-size: 30px;
			font-weight: bold;
			margin: 20px 0px 60px 0;
		}
		.el-form {
			/deep/.el-form-item__label {
				color: @textc1;
			}

			.go_login {
				color: @textc5;
				font-weight: bold;
			}
		}
	}
	.btn {
		margin-top: 40px;
		.el-button {
			width: 100%;
			font-size: 24px;
		}
	}
}
</style>
