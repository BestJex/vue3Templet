<template>
	<div>
		<el-carousel :interval="4000">
			<el-carousel-item v-for="(item, index) in banner" :key="index">
				<div class="img_background" :style="'background:url(' + item.pic + ')' " >
				</div>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
	data() {
		return {
			banner: [
// 				{
// 					pic: require('../assets/banner/1.jpg'),
// 					alt: '1'
// 				},
// 				{
// 					pic: require('../assets/banner/3.jpg'),
// 					alt: '2'
// 				},
// 				{
// 					pic: require('../assets/banner/2.jpg'),
// 					alt: '3'
// 				},
// 				{
// 					pic: require('../assets/banner/4.jpg'),
// 					alt: '4'
// 				}
			]
		};
	},
	watch: {},
	methods: {
		requestBanner:async function(){
			let _this = this;
			const requestConfig = {
				apiUrl:'banner',
				params:{},
				typ:'get'			
			};
			const getResult = await this.$store.dispatch('apiRequest',requestConfig)
			// console.log(getResult)
			if (getResult.error === 0) {
				_this.banner = getResult.msg;
			}else{
				_this.$message({
					message:'banner请求失败',
					type: 'error'
				});
			}
			
		}
	},
	created() {},
	mounted() {
		this.requestBanner()
	}
};
</script>

<style scoped lang="less">
.img_background {
	width: 100%;
	height: 100%;
	background-repeat: no-repeat !important;
	background-position: center center !important;
	background-size: cover !important; //cover contain
}
@media screen and (max-width: 1920px) and (min-width: 1400px) {
	/deep/.el-carousel {
		.el-carousel__container {
			height: 666px;
		}
	}
}
@media screen and (max-width: 1400px) and (min-width: 1200px) {
	/deep/.el-carousel {
		.el-carousel__container {
			height: 500px;
		}
	}
}
@media screen and (max-width: 1200px) and (min-width: 992px) {
	/deep/.el-carousel {
		.el-carousel__container {
			height: 400px;
		}
	}
}
// >=768 平板
@media screen and (max-width: 992px) and (min-width: 768px) {
	/deep/.el-carousel {
		.el-carousel__container {
			height: 340px;
		}
	}
	.img_background {
		
		background-position: 30% center !important;
		
	}
}
// 手机
@media screen and (max-width: 768px) {
	/deep/.el-carousel {
		.el-carousel__container {
			height: 280px;
		}
	}
	.img_background {
		
		background-position: 30% center !important;
		
	}
}
</style>
