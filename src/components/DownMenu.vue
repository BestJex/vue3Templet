<template>
	<div class="down_menu">
		<div v-for="(item, index) in menuData" :key="index">
			<div v-if="item.typ">
				<!-- 存在一级菜单 -->
				<div
					class="menu menu_a flex flex_align_center pointer"
					:class="currentIdx.a == item.id ? 'menu_active_a' : ''"
					@click="downMenuClick('a', item.id)"
				>
					<span>{{ item.title }}</span>
					<i class="iconfont">{{ currentIdx.a == item.id ? '&#xe692;' : '&#xe6ac;' }}</i>
				</div>
				<div :class="currentIdx.a == item.id ? 'slide_down' : 'slide_up'">
					<!-- 存在二级菜单 -->
					<div v-for="(item1, index1) in item.list" :key="index1">
						<!-- 存在三级菜单 -->
						<div v-if="item1.typ">
							<div
								class="menu menu_b flex flex_align_center pointer"
								:class="currentIdx.b == item1.id ? 'menu_active_b' : ''"
								@click="downMenuClick('b', item1.id)"
							>
								<span>{{ item1.title }}</span>
								<i class="iconfont">
									{{ currentIdx.b == item1.id ? '&#xe692;' : '&#xe6ac;' }}
								</i>
							</div>
							<div :class="currentIdx.b == item1.id ? 'slide_down' : 'slide_up'">
								<div
									class="menu menu_c pointer"
									v-for="(item2, index2) in item1.list"
									:key="index2"
									:class="currentIdx.c == item2.id ? 'menu_active_c' : ''"
									@click="downMenuClick('c', item2.id)"
								>
									{{ item2.title }}
								</div>
							</div>
						</div>
						<div
							v-else
							class="menu menu_b pointer"
							:class="currentIdx.b == item1.id ? 'menu_active_c' : ''"
							@click="downMenuClick('b', item1.id)"
						>
							{{ item1.title }}
						</div>
					</div>
				</div>
			</div>
			<div
				v-else
				class="menu menu_a pointer"
				:class="currentIdx.a == item.id ? 'menu_active_a' : ''"
				@click="downMenuClick('c', item.id)"
			>
				{{ item.title }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentIdx: {
				a: 's',
				b: 's',
				c: 's'
			},
			menuData: [
				{
					title: '帮助中心',
					id: '0',
					typ: true,
					list: [
						{
							title: '快速指南',
							id: '0-1',
							typ: true,
							list: [
								{
									title: '快速指南0',
									id: '0-1-1'
								},
								{
									title: '组圈流程1',
									id: '0-1-2'
								},
								{
									title: '商品查询2',
									id: '0-1-3'
								}
							]
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
				},
				{
					title: '支付方式',
					id: '6',
					typ: false
				}
			]
		};
	},
	watch: {},
	methods: {
		downMenuClick(typ, idx) {
			console.log(idx);
			if (idx === this.currentIdx[typ]) {
				this.currentIdx[typ] = 's';
			} else {
				this.currentIdx[typ] = idx;
			}
		}
	},
	created() {},
	mounted() {}
};
</script>

<style scoped lang="less">
.down_menu {
	width: 300px;
	border: 1px solid red;
	.menu {
		height: 50px;
		line-height: 50px;
		text-align: left;
		&:hover {
			background: @bgc1;
		}
		&.menu_a {
			padding-left: 30px;
		}
		&.menu_b {
			padding-left: 40px;
		}
		&.menu_c {
			padding-left: 50px;
		}
	}
	.iconfont {
		transition: all 0.3s;
	}
	.slide_up {
		max-height: 0px;
		overflow: hidden;
		transition: max-height 0.3s;
	}
	.slide_down {
		height: 100%;
		max-height: 400px;
		overflow: scroll;
		transition: max-height 0.5s;
	}
	.menu_active_a,
	.menu_active_b,
	.menu_active_c {
		background: @bgc1;
		color: @textc1;
	}
}
</style>
