<template>
	<div>
		transform 参考
		<a
			href="https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/"
			target="_blank"
		>
			https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/</a
		>
		<div class="">
			<button type="primary" @click="resetCube">重置</button>
			<el-radio-group v-model="radioChecked" @change="modeChange">
				<el-radio-button label="自动" @click="autoMove"></el-radio-button>
				<el-radio-button label="手动" @click="handMove" checked></el-radio-button>

			</el-radio-group>
		</div>

		<!-- https://www.cnblogs.com/shenzikun1314/p/6390181.html -->
		<div class="cube">
			<div
				class="cube_show"
				@mousedown="mouseDown"
				@mousemove="mouseMove"
				@mouseup="mouseUp"
				@mouseleave="mouseLeave"
				@mouseenter="mouseEnter"
				@dragstart.prevent
			>
				<!-- :class="isAnimation ? 'cube_wrap_aniamte' : ''" -->
				<!-- :class="isAuto ? 'cube_wrap_aniamte' : (isAnimation ? '' : 'cube_wrap_aniamte_paused') " -->

				<div
					class="cube_wrap relative "
					ref="cube_wrap"
					:class="[
						isAuto ? 'cube_wrap_aniamte' : '',
						isAnimation ? '' : 'cube_wrap_aniamte_paused'
					]"
					:style="{ transform: cube_wrap_transform }"
				>
					<div class="square top absolute">1</div>
					<div class="square down absolute">2</div>
					<div class="square left absolute">3</div>
					<div class="square right absolute">4</div>
					<div class="square front absolute">5</div>
					<div class="square back absolute">6</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CheckBox from '../components/CheckBox';
export default {
	components: {
		CheckBox
	},
	data() {
		let _this = this;
		return {
			radioChecked:'自动',
			mouse_down: {
				x: 0,
				y: 0
			},
			mouse_up: {
				x: 0,
				y: 0
			},
			isMouseDown: false,
			move_distance: {
				x: 0,
				y: 0
			},
			rotate_deg: {
				x: 0,
				y: -10
			},
			isAuto: true,
			isAnimation: true,
			cube_wrap_transform: ''
		};
	},
	watch: {},
	methods: {
		mouseDown(e) {
			this.isMouseDown = true;
			this.mouse_down.x = e.clientX;
			this.mouse_down.y = e.clientY;
			// console.log('e',e)
		},
		mouseMove(e) {
			// 手动模式生效
			console.log(this.isMouseDown && !this.isAuto);
			if (this.isMouseDown && !this.isAuto) {
				let distance_x = e.clientX - this.mouse_down.x,
					distance_y = e.clientY - this.mouse_down.y;
				this.move_distance.x = distance_x;
				this.move_distance.y = distance_y;
				let rotate_deg_x = this.rotate_deg.x - distance_y * 0.4,
					rotate_deg_y = this.rotate_deg.y + distance_x * 0.6;
				this.rotate_deg.x = rotate_deg_x;
				this.rotate_deg.y = rotate_deg_y;
				this.cube_wrap_transform =
					'perspective(400px) rotateX(' +
					rotate_deg_x +
					'deg) rotateY(' +
					rotate_deg_y +
					'deg)';
				this.mouse_down.x = e.clientX;
				this.mouse_down.y = e.clientY;
			} else {
				// console.log('mousemove',getDom)
			}
		},
		mouseEnter(e) {
			this.isAnimation = false;
			// this.cube_wrap_transform = this.computeTransform();
			// console.log(getComputedStyle.transform)
			// console.log(getTransform)
		},
		mouseUp(e) {
			this.isMouseDown = false;
			// 			this.cube_wrap_transform = this.computeTransform();
			this.isAnimation = true;
			// 			console.log('mouseUp');
		},
		mouseLeave() {
			// this.isMouseDown = false;
			this.mouseUp();
		},
		computeTransform() {
			let getDom = this.$refs.cube_wrap;
			let getComputedStyle = window.getComputedStyle(getDom, null);
			let getTransform =
				getComputedStyle.getPropertyValue('-webkit-transform') ||
				getComputedStyle.getPropertyValue('-moz-transform') ||
				getComputedStyle.getPropertyValue('-ms-transform') ||
				getComputedStyle.getPropertyValue('-o-transform') ||
				getComputedStyle.getPropertyValue('transform') ||
				'FAIL';
			return getTransform;
		},
		resetCube() {
			this.isAuto = true;
			this.isAnimation = true;
			this.isMouseDown = false;
			this.cube_wrap_transform = '';
		},
		modeChange(){
			console.log(this.radioChecked);
			if(this.radioChecked==='自动'){
				this.isAuto = true;
			}else{
				this.isAuto = false;
				this.cube_wrap_transform = this.computeTransform();
			}
		},
		handMove() {
			this.isAuto = false;
			this.cube_wrap_transform = this.computeTransform();
		},
		autoMove() {
			this.isAuto = true;
		}
	},
	created() {},
	mounted() {}
};
</script>

<style scoped lang="less">
@width: 200px;
@height: 200px;
@translateZ: 100px;
@translateZ_: -100px;

// 鼠标在某一区域时显示 根据初始宽高计算
@hoverWidth: 800px;
@hoverHeight: 500px;
@hoverTranslateX: 300px; //(hoverWidth - width)/2
@hoverTranslateX_: -300px;
@hoverTranslateY: 150px; //(hoverHeight - height)/2
@hoverTranslateY_: -150px;
@hoverTranslateZ: 150px;
@hoverTranslateZ_: -150px;
@hoverTranslatetopZ: 250px; // hoverHeight/2
@hoverTranslatetopZ_: -250px;
@hoverTranslateLeftZ: 400px;
@hoverTranslateLeftZ: 400px;
@hoverTranslateLeftZ: 400px;
@hoverTranslateLeftZ: 400px;
@hoverTranslateLeftZ_: -400px;

@rotateX: 30deg; //正方体初始显示角度
@rotateY: 45deg;
@rotateY_: -5deg;
@hoverRotate: 3600deg;
@transition: 1s;
.cube {
	margin: 400px;
	min-height: 1200px;
	.cube_show {
		// min-height: 100px;
		// border: 1px solid red;
		// 设置倒影
		-webkit-box-reflect: below 10px -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 20%, rgba(
						0,
						0,
						0,
						0.8
					)
					100%);
		// perspective: 300px; //规定 3D 元素的透视效果
		// perspective-origin: 50% 50%; //规定3d元素的底部位置
		.cube_wrap {
			width: @width;
			height: @height;
			margin: 200px auto;
			transform-style: preserve-3d; //添加3D效果
			// transform: rotateX(@rotateX) rotateY(@rotateY); //rotateX(30deg) rotateY(60deg)  rotateZ(60deg)
			&.cube_wrap_aniamte {
				animation: cubeAnimate 10s linear infinite;
			}
			&.cube_wrap_aniamte_paused {
				animation-play-state: paused;
			}
			// 			&:hover {
			// 				animation-play-state: paused;
			// 			}
			// transition: @transition;
			@keyframes cubeAnimate {
				0% {
					transform: rotateY(0deg);
				}
				10% {
					transform: rotateY(-90deg);
				}
				20% {
					transform: rotateY(-180deg);
				}
				30% {
					transform: rotateY(-270deg);
				}
				40% {
					transform: rotateY(-360deg);
				}
				50% {
					transform: rotateX(90deg) rotateY(-360deg);
				}
				60% {
					transform: rotateX(180deg) rotateY(-360deg);
				}
				70% {
					transform: rotateX(270deg) rotateY(-360deg);
				}
				80% {
					transform: rotateX(360deg) rotateY(-360deg);
				}
				90% {
					transform: rotateX(360deg) rotateY(180deg);
				}
				100% {
					transform: rotateX(360deg) rotateY(0deg);
				}
			}
			&:hover {
				// transform:translateZ(@translateZ_) rotateY( @hoverRotate) ;
				// 			-webkit-transform:translateZ(@translateZ_) rotateY( @hoverRotate) ;
				// 			-moz-transform:translateZ(@translateZ_) rotateY( @hoverRotate) ;
				// 			-o-transform:translateZ(@translateZ_) rotateY( @hoverRotate) ;
				// 			-ms-transform:translateZ(@translateZ_) rotateY( @hoverRotate) ;
				// webkit-transform-origin:-100px 100px 100px ;
				// transform-origin:-70px 30px 100px;
				// transition:@transition;
			}
			.square {
				width: @width;
				height: @height;
				background-size: cover;
				background-position: center center;
				background-repeat: no-repeat;
				color: #fff;
				transition: @transition;
				&:hover {
					width: @hoverWidth;
					height: @hoverHeight;
					transition: @transition;
				}
				&:nth-child(1) {
					// 上
					transform: rotateX(90deg) translateZ(@translateZ);
					background: url(../assets/banner/2.jpg);
					&:hover {
						transform: rotateX(90deg) translateX(@hoverTranslateX_)
							translateZ(@hoverTranslatetopZ);
					}
				}
				&:nth-child(2) {
					// 下
					transform: rotateX(-90deg) translateZ(@translateZ);
					background: url(../assets/banner/3.jpg);
					&:hover {
						transform: rotateX(-90deg) translateX(@hoverTranslateX_);
					}
				}
				&:nth-child(3) {
					// 左
					transform: rotateY(-90deg) translateZ(@translateZ);
					background: url(../assets/banner/4.jpg);
					&:hover {
						transform: rotateY(-90deg) translateY(@hoverTranslateY_)
							translateZ(@hoverTranslateLeftZ);
					}
					// transform-origin: right;
				}
				&:nth-child(4) {
					// 右
					background: url(../assets/banner/5.jpg);
					transform: rotateY(90deg) translateZ(@translateZ);
					&:hover {
						transform: rotateY(90deg) translateY(@hoverTranslateY_)
							translateZ(@hoverTranslateZ_);
					}
				}
				&:nth-child(5) {
					// 前
					background: url(../assets/banner/6.jpg);
					transform: translateZ(@translateZ);
					// &:focus,&:active
					&:hover {
						transform: translateX(@hoverTranslateX_) translateY(@hoverTranslateY_)
							translateZ(@translateZ);
					}
				}
				&:nth-child(6) {
					// 后
					background: url(../assets/banner/7.jpg);
					transform: rotateY(180deg) translateZ(@translateZ);
					&:hover {
						transform: rotateY(-180deg) translateX(@hoverTranslateX)
							translateY(@hoverTranslateY_) translateZ(@translateZ);
					}
				}
			}
		}
	}
}
</style>
