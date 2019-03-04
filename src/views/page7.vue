<template>
	<div>
		transform 参考
		<a
			href="https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/"
			target="_blank"
		>
			https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/</a
		>
		<!-- https://www.cnblogs.com/shenzikun1314/p/6390181.html -->
		<div
			class="cube"
			@mousedown="mouseDown"
			@mousemove="mouseMove"
			@mouseup="mouseUp"
			@mouseleave="mouseLeave"
			@dragstart.prevent
		>
			<div class="cube_wrap relative" :style="{ transform: transform }">
				<div class="square absolute"><img src="../assets/banner/2.jpg" alt="" /></div>
				<div class="square absolute">2</div>
				<div class="square absolute">3</div>
				<div class="square absolute">4</div>
				<div class="square absolute">5</div>
				<div class="square absolute">6</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		let _this = this;
		return {
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

			transform: ''
		};
	},
	watch: {},
	methods: {
		mouseDown(e) {
			this.isMouseDown = true;
			this.mouse_down.x = e.clientX;
			this.mouse_down.y = e.clientY;
			console.log('mousedown', e);
		},
		mouseMove(e) {
			if (this.isMouseDown) {
				let distance_x = e.clientX - this.mouse_down.x,
					distance_y = e.clientY - this.mouse_down.y;
				this.move_distance.x = distance_x;
				this.move_distance.y = distance_y;
				let rotate_deg_x = this.rotate_deg.x - distance_y * 0.4,
					rotate_deg_y = this.rotate_deg.y + distance_x * 0.6;
				this.rotate_deg.x = rotate_deg_x;
				this.rotate_deg.y = rotate_deg_y;
				this.transform =
					'perspective(400px) rotateX(' +
					rotate_deg_x +
					'deg) rotateY(' +
					rotate_deg_y +
					'deg)';
				this.mouse_down.x = e.clientX;
				this.mouse_down.y = e.clientY;
				console.log(distance_x);
			}
			// console.log('mousemove',e)
		},
		mouseUp(e) {
			this.isMouseDown = false;
			console.log('mouseup', e);
		},
		mouseLeave() {
			this.mouseUp();
		}
	},
	created() {},
	mounted() {}
};
</script>

<style scoped lang="less">
.cube {
	// 			&:hover {
	// 						transform: rotateY(360deg) rotateZ(360deg);
	// 						transform-origin:center center;
	// 						transition:  6s;
	//
	// 			}
	// 设置倒影
	-webkit-box-reflect: below 10px -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 20%, rgba(
					0,
					0,
					0,
					0.8
				)
				100%);

	.cube_wrap {
		width: 200px;
		height: 200px;
		margin: 100px auto;
		transform-style: preserve-3d;
		// perspective:200px; //规定 3D 元素的透视效果
		// perspective-origin: 50% 50%; //规定3d元素的底部位置
		transform: rotateX(30deg) rotateY(45deg); //rotateX(30deg) rotateY(60deg)  rotateZ(60deg)
		// 	  -webkit-transform: rotateX(45deg) rotateY(45deg);
		// 	  -moz-transform: rotateX(45deg) rotateY(45deg);
		// 	  -o-transform:rotateX(45deg) rotateY(45deg);
		// 	  -ms-transform:rotateX(45deg) rotateY(45deg);
		// 	transform: rotateY(3600deg) ;
		// 	webkit-transform-origin:-100px 100px 100px ;
		// 	transform-origin:-100px 100px 100px;
		// 	transition:  10s;
		&:hover {
			// transform: rotateY(90deg) ;
			// webkit-transform-origin:-100px 100px 100px ;
			// transform-origin:-70px 30px 100px;
			// transition:  10s;
		}

		background: red;
		.square {
			width: 200px;
			height: 200px;
			opacity: 0.5;

			img {
				width: 200px;
				height: 200px;
			}
			&:nth-child(1) {
				// 上
				border: 1px solid red;
				background: blue;
				transform: rotateX(90deg) translateZ(100px);
			}
			&:nth-child(2) {
				// 下
				border: 1px solid red;
				background: red;
				transform: rotateX(90deg) translateZ(-100px);
			}
			&:nth-child(3) {
				// 左
				border: 1px solid red;
				background: black;
				transform: rotateY(90deg) translateZ(-100px);
			}
			&:nth-child(4) {
				// 右
				border: 1px solid red;
				background: blue;
				transform: rotateY(90deg) translateZ(100px);
			}
			&:nth-child(5) {
				// 前
				border: 1px solid red;
				background: #fff;
				transform: translateZ(100px);
				&:hover {
				}
			}
			&:nth-child(6) {
				// 后
				border: 1px solid red;
				background: green;
				transform: translateZ(-100px);
			}
		}
	}
}
</style>
