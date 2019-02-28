<template>
	<div class="footer">
		<div v-if="devicesType">
			<div class="flex flex_around footer_ul">
				<ul>
					<li>联系我们</li>
					<li class="flex flex_align_center">
						<i class="iconfont" >&#xe61d;</i>
						<span >xxx-xxxxxxx</span>
					</li>
					<li>
						<a
							href="https://www.xyzgy.xyz"
							target="_blank"
							class="flex flex_align_center"
						>
							<i class="iconfont" >&#xe607;</i>

							<span >https://www.xyzgy.xyz</span>
						</a>
					</li>
					<li class="flex flex_align_center">
						<i class="iconfont" >&#xe649;</i>
						<span >流浪中。。。。。。</span>
					</li>
				</ul>

				<div class="gzh">
					<div class="flex flex_align_center">
						<i class="iconfont">&#xe64f;</i>
						<span style="font-size: 20px;font-weight: bold;">
							关注我
						</span>
					</div>
					<img src="../assets/gzh.jpg" />
				</div>
			</div>

			<div class="flex flex_align_center flex_around" style="margin-top: 40px;">
				<div class="flex flex_align_center">
					<div style="padding:0 10px;">Copyright @ 2019 北京车驰合众科技有限公司</div>
					<img src="../assets/GFA.png" alt="" />
					<div>京ICP备18061093号</div>
				</div>
			</div>
		</div>
		<div v-else>
			<div class="footer_ul">
				<ul>
					<li>联系我们</li>
					<li class="flex flex_align_center">
						<i class="iconfont" >&#xe61d;</i>
						<span >400-9905840</span>
					</li>
					<li>
						<a
							href="https://www.xizhongyun.com"
							target="_blank"
							class="flex flex_align_center"
						>
							<i class="iconfont" >&#xe607;</i>

							<span >https://www.xizhongyun.com</span>
						</a>
					</li>
					<li class="flex flex_align_center">
						<i class="iconfont" >&#xe649;</i>
						<span >北京市大兴区亦庄镇中电金扬科技园3号楼c301</span>
					</li>
				</ul>
				<div class="gzh">
					<img src="../assets/gzh.jpg" />
				</div>
			</div>
			<div class="text_center" style="margin-top: 40px;">
				<div style="padding:0 10px;">Copyright @ 2019 北京车驰合众科技有限公司</div>
				<div class="flex  flex_around">
					<div class="flex flex_align_center ">
						<img src="../assets/GFA.png" alt="" />
						<div>京ICP备18061093号</div>
					</div>		
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {
	},
	data() {
		return {
			devicesType: true
		};
	},
	watch: {
		'$store.state.w': function() {
			let w = this.$store.state.w;
			if (w < 800) {
				this.devicesType = false; //判定移动设备
			} else {
				this.devicesType = true;
			}
		}
	},
	methods: {},
	created() {},
	mounted() {
		let _this = this;
		let getWidth = _this.$store.state.w;
		if (getWidth < 800) {
			_this.devicesType = false; //判定移动设备
		} else {
			_this.devicesType = true;
		}
	}
};
</script>

<style scoped lang="less">
.footer {
	font-size: 20px;
	.footer_ul {
		font-size: 22px;
		ul {
			li {
				padding: 4px;
				color: @textc1;
				&:first-child {
					// border-bottom:1px solid @borderc2;
					font-weight: bold;
					padding:20px;
				}
				&:not(:first-child) {
					cursor: pointer;
					&:hover {
						color: @hoverc1;
						font-weight: bold;
					}
				}
			}
			
		}
		.gzh {
			> div {
				padding: 8px;
				color: @textc1;
			}
			> img {
				width: 200px;
				height: 200px;
			}
		}
		.iconfont{
			font-size: 48px;
			padding-right: 24px;
		}
	}
}
</style>