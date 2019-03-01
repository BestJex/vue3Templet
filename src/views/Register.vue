<template>
	<div class="register" :style="{ height: height }">
		<div class="common_width flex flex_end">
			<div class="reg_form">
				<div class="reg_title">欢迎注册</div>
				<el-form
					class=""
					label-position="left"
					label-width="70px"
					:model="regFormData"
					:rules="formRules"
					ref="regForm"
				>
					<PhoneSms
						ref="phoneSms"
						:formData="regFormData"
						:isRequired="true"
						labelPosition="left"
						labelWidth="70px"
					/>
					<el-form-item label="密码" prop="pwd">
						<el-input v-model="regFormData.pwd" type="password"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="pwd1">
						<el-input v-model="regFormData.pwd1" type="password"></el-input>
					</el-form-item>
					<el-form-item class="flex flex_end">
						已有账号，去 <span @click="goLogin" class="go_login pointer">登录 </span>
					</el-form-item>
					<el-form-item> </el-form-item>
				</el-form>
				<div class="btn">
					<div style="margin:20px 0" class="flex flex_around">
						<CheckBox
							:checked="regChecked"
							size="16px"
							color="#000"
							@checkClick="checkClick"
						>
							<span style="padding-left:5px ;"
								>我已阅读并同意<span style="color:red;">用户注册协议</span></span
							>
						</CheckBox>
					</div>
					<el-button type="primary" @click="submitForm('regForm')">注册</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PhoneSms from '../components/PhoneSms';
import CheckBox from '../components/CheckBox';
export default {
	components: {
		PhoneSms,
		CheckBox
	},
	data() {
		let _this = this;
		return {
			height: this.$store.state.h + 'px',
			regChecked: false,
			regFormData: {
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
						required: true,
						validator: (rule, value, callback) => {
							let lengthPwd = _this.regFormData.pwd.length;
							if (_this.regFormData.pwd) {
								if (value === _this.regFormData.pwd) {
									callback();
									return;
								} else {
									callback(new Error('两次密码不一致'));
									return;
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
			this.$router.push('/login');
		},
		checkClick(r) {
			this.regChecked = r;
		},
		submitForm(formName) {
			let _this = this;
			this.$refs['phoneSms'].phoneSms();
			this.$refs[formName].validate(valid => {
				if (valid) {
					if (_this.regChecked) {
						_this.$message({
							message: '注册成功',
							type: 'success'
						});
					} else {
						_this.$message({
							message: '请勾选注册协议',
							type: 'warning'
						});
					}
				} else {
					console.log('ppp');
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
		padding: 50px 50px 50px 20px;
		margin: 100px 6% 0 0;
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
		.el-button {
			width: 100%;
			font-size: 24px;
		}
	}
}
</style>
