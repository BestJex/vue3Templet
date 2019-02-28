<template>
	<div class="top_nav">
		<div class="common_width flex flex_end">
			<span class="top_span pointer" @click="goLogin">登录</span> / <span class="top_span pointer" @click="goRegister">注册</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	watch: {},
	methods: {
		goLogin() {
			this.$router.push('/login');
		},
		goRegister() {
			this.$router.push('/register');
		}
	},
	created() {},
	mounted() {}
};
</script>

<style scoped lang="less">
.top_nav {
	height: 40px;
	background: @bgc3;
	.top_span{
		padding:0px 10px;
		&:hover{
			color: @textc1;
			font-weight: bold;
		}
	}
}
</style>
