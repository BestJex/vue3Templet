<!-- 头部左侧不变只有内容区改变 这样的需求可以用嵌套路由来做 -->
<template>
	<div class="header">
		<el-menu :default-active="activePath" router  @select="handleSelect" class="flex flex_around">
			<el-menu-item v-for="(item,index) in headerList" :key="index" :index="item.path">
				<!-- <i class="iconfont">&#xe630;</i> -->
				{{item.name}}</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activePath: '/index',
				headerList: [{
					path: '/index',
					name: '首页'
				}, {
					path: '/page2',
					name: '页面2',
				}, {
					path: '/page3',
					name: '页面3',
				}, {
					path: '/page4',
					name: '页面4',
				}, {
					path: '/page5',
					name: '页面5',
				}, {
					path: '/page6',
					name: '页面6',
				}, {
					path: '/page7',
					name: '页面7',
				}]
			};
		},
		watch: {
			$route(to) {
				this.activePath = to.path;
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				// console.log(key, keyPath);
			}
		},
		mounted() {
			this.activePath = this.$route.path;
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.header {
		.el-menu {
			// background: @bgc1;
			padding: 0 10px;
			border: none;
			border-radius: 5px;

			// box-shadow: 1px 1px 6px @borderc3;

			.el-menu-item {
				color: @textc1;
				height: 40px;
				line-height: 40px;
				border: none;
				font-size: 18px;
				.iconfont {
					color: @textc1;
				}

				&:hover {
					background: none;
					color: @textc2;

					.iconfont {
						color: @textc2;
					}
				}

				&.is-active {
					color: @textc2  !important;
					background: none;
					// border-color: @textc2;
					border: none;

					.iconfont {
						color: @textc2;
					}
				}

			}
		}

	}
</style>
