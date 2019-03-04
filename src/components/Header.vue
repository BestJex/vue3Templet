<!-- 头部左侧不变只有内容区改变 这样的需求可以用嵌套路由来做 -->
<template>
	<div class="header">
		<div v-if="screenType">
			<el-menu
				:default-active="activePath"
				router
				@select="handleSelect"
				class="flex flex_around"
			>
				<el-menu-item v-for="(item, index) in headerList" :key="index" :index="item.path">
					<a
						v-if="item.typ"
						target="_blank"
						:href="item.path"
						:class="item.path == activePath ? 'aPathActive' : ''"
					>
						{{ item.name }}
					</a>
					<router-link
						v-else
						tag="a"
						:to="item.path"
						:class="item.path == activePath ? 'aPathActive' : ''"
					>
						<span class="a-inner">{{ item.name }}</span>
					</router-link>
					
					</el-menu-item
				>
				<div class="flex flex_align_center">
					<i class="iconfont" style="font-size: 36px;">&#xe61d;</i>
					<span style="padding-left:20px;font-size: 20px;">xxx-xxxxxxx</span>
				</div>
			</el-menu>
		</div>
		<div v-else class="text_right">
			<el-dropdown trigger="click">
				<span class="">
					<i class="iconfont" style="font-size: 34px;padding-right: 20px;">&#xe60c;</i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item
						v-for="(item, index) in headerList"
						:key="index"
						:index="item.path"
					>
						<a v-if="item.typ" @click="visibleShow = true">{{ item.name }}</a>
						<router-link
							v-else
							tag="a"
							:to="item.path"
							:class="item.path == activePath ? 'aPathActive' : ''"
						>
							<span class="a-inner">{{ item.name }}</span>
						</router-link>
					</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<el-dialog title="" :visible.sync="visibleShow" append-to-body>
				<div class="flex flex_around"><img src="../assets/gzh.jpg" alt="" /></div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		headerActive: {
			type: String,
			default: '/index'
		},
		headerDefault: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			activePath: '/index',
			visibleShow: false,
			screenType: true,
			headerList: [
				{
					path: '/index',
					name: '首页',
					typ: false //是否跳转其它网址
				},
				{
					path: 'http://www.xyzgy.xyz/',
					name: 'xyz',
					typ: true //是否跳转其它网址
				},
				{
					path: '/page3',
					name: '页面3',
					typ: false //是否跳转其它网址
				},
				{
					path: '/page4',
					name: '页面4',
					typ: false //是否跳转其它网址
				},
				{
					path: '/page5',
					name: '页面5',
					typ: false //是否跳转其它网址
				},
				{
					path: '/page6',
					name: '页面6',
					typ: false //是否跳转其它网址
				},
				{
					path: '/show',
					name: '页面7',
					typ: false //是否跳转其它网址
				}
			]
		};
	},
	watch: {
		$route(to) {
			this.activePath = to.path;
		},
		'$store.state.w': function() {
			let w = this.$store.state.w;
			if (w < 800) {
				this.screenType = false; //判定是否小屏幕
			} else {
				this.screenType = true;
			}
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			// console.log(key, keyPath);
		}
	},
	mounted() {
		let _this = this;
		_this.activePath = _this.headerDefault ? _this.headerActive : _this.$route.path;
		console.log(_this.$route.path);
		let getWidth = _this.$store.state.w;
		// alert(getWidth)
		if (getWidth < 800) {
			_this.screenType = false; //判定移动设备
		} else {
			_this.screenType = true;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
	.el-menu {
		padding: 0 10px;
		border: none;
		border-radius: 5px;
		.el-menu-item {
			color: @textc1;
			height: 40px;
			line-height: 40px;
			border: none;
			font-size: 24px;
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
				color: @textc2 !important;
				background: none;
				border: none;
				.iconfont {
					color: @textc2;
				}
			}
		}
	}
}
/deep/.el-dialog {
	width: 80%;
}
/deep/.el-dialog__body {
	// width: 600px;
	img {
		width: 430px;
		height: 430px;
	}
}
.el-dropdown-menu {
	width: 300px;
	.el-dropdown-menu__item {
		font-size: 30px;
		a{
			display: inline-block;
			width: 100%;
			padding:16px 0;
		}
	}
}
</style>
