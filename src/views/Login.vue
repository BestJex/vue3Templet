<template>
	<div class="login ">
		<div class="login_form border_shadow">
			<!-- 				<div class="absolute bg_image">
			<img src="../assets/login/login.png" mode="" style="width: 100%;height: 100%;" />
		</div> -->
			<el-form label-position="right" label-width="50px" :model="formLabelAlign">
				<el-form-item label="账户">
					<el-input v-model="formLabelAlign.name"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="formLabelAlign.region"></el-input>
				</el-form-item>
				<el-form-item label="">
					<div class="flex flex_between">
						<el-checkbox v-model="checked">记住密码</el-checkbox>
						<div>忘记密码</div>
					</div>
				</el-form-item>
			</el-form>
			<div>
				<el-button type="primary" @click="submitForm('ruleForm')" class="xyz_btn"
					>登录</el-button
				>
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
			formLabelAlign: {
				name: '18511043664',
				region: '123456'
			},
			checked: true
		};
	},
	methods: {
		submitForm: async function() {
			const requestConfig = {
				apiUrl:'news',
				params:{
					name:'18511043664',
					region:'123456'
				},
				typ:'post'			
			};
			const getResult = await this.$store.dispatch('apiRequest',requestConfig)
			// console.log(getResult)
			// this.$store.commit('login', 'getResult')
			// this.$router.push('/index');
		}
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
// 	.login{
// 		width: 100%;
// 		min-width: 1024px;
// 		.bg_image{
// 			top: 0;
// 			min-width: 1024px;
// 		}
// 		.form{
// 			width: 19%;
// 			min-width: 192px;
// 			top: 18%;
// 			right: 24%;
// 		}
//
// 	}
.login {
	.login_form {
		width: 340px;
		padding: 50px 20px;
		margin: 100px auto 0 auto;
	}
}
</style>
