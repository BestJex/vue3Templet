<template>
	<div class="v_scroll" :style="{ height: totalHeight }">
		<ul class="animateTranslateY" id="animateTranslateY">
			<!-- <li v-for="(item, index) in vScrollData" :key="index">{{ item }}-{{ index }}</li> -->
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		// 手动设置滚动区域总高度
		totalHeight: {
			type: String,
			default: '150px'
		},
		// 手动设置单行数据高度
		oneRowHeight: {
			type: String,
			default: '30px'
		},
		vScrollData:{
			type:Array,
			default: ['请设置数据']
		}
	},
	data() {
		return {
			// vScrollData: ['公司1', '公司1', '公司1', '公司1', '公司1', '公司1']
			// oneRowHeight:'30px',//手动设置每行数据的高度
		};
	},
	watch: {},
	methods: {
		// 动态创建动画样式
		createKeyFrames(h) {
			let style = document.createElement('style');
			style.lang = 'less';
			let keyFrames =
				'\
			   @keyframes myTranslateY {\
				0% {\
					transform: translateY(0px);\
					-webkit-transform: translateY(0px);\
					-moz-transform: translateY(0px);\
					-o-transform: translateY(0px);\
					-ms-transform: translateY(0px);\
				}\
				100% {\
					transform: translateY(translate_Y_Height);\
					-webkit-transform: translateY(translate_Y_Height);\
					-moz-transform: translateY(translate_Y_Height);\
					-o-transform: translateY(translate_Y_Height);\
					-ms-transform: translateY(translate_Y_Height);\
				}\
			   }';
			style.innerHTML = keyFrames.replace(/translate_Y_Height/g, h);
			document.getElementsByTagName('head')[0].appendChild(style);
		},
		initKeyFrames() {
			let _this = this,
				length = _this.vScrollData.length,
				html = '';
			if (length > 0) {
				_this.vScrollData.forEach(item => {
					html =
						html +
						`<li style="height:${_this.oneRowHeight};line-height:${
							_this.oneRowHeight
						};cursor: pointer">${item}</li>`;
				});
				document.getElementById('animateTranslateY').innerHTML = html + html; // 数据复制

				_this.createKeyFrames('-' + _this.oneRowHeight);
			} else {
				_this.$message({
					message: '请设置数据',
					type: 'warning'
				});
			}
		}
	},
	created() {},
	mounted() {
		this.initKeyFrames();
	}
};
</script>

<style scoped lang="less">
.v_scroll {
	overflow: hidden;
	.animateTranslateY {
		animation: myTranslateY linear 1s infinite;
		-webkit-animation: myTranslateY linear 1s infinite;
		&:hover {
			// 动画暂停
			animation-play-state: paused;
			-webkit-animation-play-state: paused;
		}
	}
	// 	@keyframes myTranslateY {
	// 		0% {
	// 			transform: translateY(0px);
	// 			-webkit-transform: translateY(0px);
	// 			-moz-transform: translateY(0px);
	// 			-o-transform: translateY(0px);
	// 			-ms-transform: translateY(0px);
	// 		}
	// 		20% {
	// 			transform: translateY(-30px);
	// 			-webkit-transform: translateY(-30px);
	// 			-moz-transform: translateY(-30px);
	// 			-o-transform: translateY(-30px);
	// 			-ms-transform: translateY(-30px);
	// 		}
	// 		40% {
	// 			transform: translateY(-60px);
	// 			-webkit-transform: translateY(-60px);
	// 			-moz-transform: translateY(-60px);
	// 			-o-transform: translateY(-60px);
	// 			-ms-transform: translateY(-60px);
	// 		}
	// 		60% {
	// 			transform: translateY(-90px);
	// 			-webkit-transform: translateY(-90px);
	// 			-moz-transform: translateY(-90px);
	// 			-o-transform: translateY(-90px);
	// 			-ms-transform: translateY(-90px);
	// 		}
	// 		80% {
	// 			transform: translateY(-120px);
	// 			-webkit-transform: translateY(-120px);
	// 			-moz-transform: translateY(-120px);
	// 			-o-transform: translateY(-120px);
	// 			-ms-transform: translateY(-120px);
	// 		}
	// 		100% {
	// 			transform: translateY(-150px);
	// 			-webkit-transform: translateY(-150px);
	// 			-moz-transform: translateY(-150px);
	// 			-o-transform: translateY(-150px);
	// 			-ms-transform: translateY(-150px);
	// 		}
	// 	}
}
</style>
