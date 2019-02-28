<template>
	<el-scrollbar class="help_center">
		<div>快速指南</div>
		<div>组圈流程</div>
		<div>商品查询</div>
	</el-scrollbar>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		watch:{},
		methods: {

		},
		created() {},
		mounted() {}
	}
</script>

<style scoped lang="less">
	// 去除elementui中 .el-scrollbar出现的横向滚动条
	/deep/.el-scrollbar__wrap {
		overflow-x: hidden;
	}
	.help_center{
		height: 600px;
		width: 100%;
		div{
			height: 400px;
		}
	}
</style>
