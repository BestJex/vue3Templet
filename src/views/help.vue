<template>
	<div class="help">
		<div class="fixed " style="height: 100px;background: #fff;">
			<div class="common_width help_header flex flex_align_center flex_end">
				<div style="width:20%" >
					<router-link to="/index">
						<img src="../assets/logo.png" style="height: 60px;" />
					</router-link>
				</div>
				<div style="width:80%" >帮助中心</div>
			</div>
		</div>
		<div class="help_show common_width" style="margin-top: 100px;">
			<div class="flex flex_between">
				<div style="width: 20%;">
					<DownMenu/>
				</div>
				<div style="width: 78%;">
					<div v-if="menuActive==0">
						<HelpCenter/>
					</div>
					<div v-else-if="menuActive==1">
						<ServiceCenter/>
					</div>
					<div v-else>
						<PayCenter/>
					</div>
					
				</div>
			</div>
		</div>
		<div class="common_width help_footer"><MyFooter /></div>
	</div>
</template>

<script>
import MyFooter from '../components/Footer';
import DownMenu from '../components/DownMenu';
import HelpCenter from '../components/HelpCenter';
import ServiceCenter from '../components/ServiceCenter';
import PayCenter from '../components/PayCenter';
export default {
	components: {
		MyFooter,
		HelpCenter,
		DownMenu,
		ServiceCenter,
		PayCenter
	},
	data() {
		return {
			menuActive:'0',
			menuOpeneds:['0'],
			menuData: [
				{
					title: '帮助中心',
					id: '0',
					typ: true,
					list: [
						{
							title: '快速指南',
							id: '0-1'
						},
						{
							title: '组圈流程',
							id: '0-2'
						},
						{
							title: '商品查询',
							id: '0-3'
						}
					]
				},
				{
					title: '客户服务',
					id: '1',
					typ: true,
					list: [
						{
							title: '商品保障',
							id: '1-1'
						},
						{
							title: '购买流程',
							id: '1-2'
						},
						{
							title: '退货流程',
							id: '1-3'
						}
					]
				},
				{
					title: '支付方式',
					id: '2',
					typ: true,
					list: [
						{
							title: '支付宝支付',
							id: '2-1'
						},
						{
							title: '微信支付',
							id: '2-2'
						},
						{
							title: '银联支付',
							id: '2-3'
						}
					]
				}	,
						{
							title: '支付方式',
							id: '6',
							typ: false}
			]
		};
	},
	watch: {},
	methods: {
		menuClick(id) {
			console.log(id);
			if(id.split('-')){
				console.log('e')
			}else{
				console.log('b')
			}
		},
		handleOpen(key, keyPath) {
			this.menuActive = key;
			this.menuOpeneds = keyPath;
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	},
	created() {},
	mounted() {}
};
</script>

<style scoped lang="less">
.help {
	width: 100%;
	top: 0;
	bottom: 0;
	.el-menu {
		border: none;
		.el-submenu {
			&.is-opened {
				background: @bgc1;
				/deep/.el-submenu__title {
					color: @textc2;
					i {
						color: @textc2;
					}
					&:hover {
						background: @bgc1;
					}
				}
			}
			
		}
		.el-menu-item {
			&.is-active{
				color: @textc4;
				font-weight: 600;
			}
		}
	}
	.fixed {
		top: 0;
		z-index: 9999;
	}
	.help_header {
		border-bottom: 2px solid @borderc5;
	}
	.help_show {
		padding: 10px 0;
		min-height: 400px;
	}
	.help_footer {
		border-top: 1px solid @borderc5;
	}
}
</style>
