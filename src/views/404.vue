<template>
	<div class="page404 common_width">
		<div class="page404_top flex flex_around">
			<div>404错误，您要找的页面不存在,或已被删除！</div>
		</div>
		<div class="page404_content flex flex_between">
			<div class="img_left">
				<div class="img_title left_title">页面不见了</div>
				<img src="../assets/404/3.png" alt="" />
			</div>
			<div class="img_right">
				<img src="../assets/404/2.png" alt="" />
				<div class="img_title right_title">
					<span style="color:#FF0000;font-weight: bold;">{{ time }} </span>秒后返回
					<span
						style="color:#FF0000;font-weight: bold;"
						class="pointer go_back"
						@click="goBack"
						>首页</span
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			time: 5
		};
	},
	watch: {},
	methods: {
		goBack() {
			this.$router.push('/index');
		},
		countDown() {
			let _this = this,
				time = this.time;
			setTimeout(function() {
				if (time < 2) {
					_this.goBack();
				} else {
					time--;
					_this.time = time;
					_this.countDown();
				}
			}, 1000);
		}
	},
	created() {},
	mounted() {
		this.countDown();
	}
};
</script>

<style scoped lang="less">
.page404 {
	max-width: 1200px;
	.page404_top {
		padding: 60px;
		div {
			width: 600px;
			height: 130px;
			line-height: 130px;
			border-radius: 50%;
			background: rgba(47, 167, 246, 0.3);
			color: @textc1;
			font-weight: bold;
			font-size: 20px;
		}
	}
	.page404_content {
		.img_title {
			font-size: 24px;
			color: @textc1;
			padding: 10px;
			&.left_title {
				border: 2px solid @bgc1;
				border-radius: 6px;
				width: 200px;
				margin: 30px auto;
			}
			&.right_title {
				margin: 30px 0;
			}
		}
		.img_left {
			img {
				width: 360px;
				height: 180px;
			}
		}
		.img_right {
			img {
				width: 260px;
				height: 260px;
			}
		}
	}
}
</style>
