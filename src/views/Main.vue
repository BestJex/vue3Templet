<template>
	<div class="main  ">
		<div class="fixed" style="background: #fff;">
			<div class="common_width main_header flex flex_align_center ">
				<div style="width:20%">
					<router-link to="/index">
						<img src="../assets/logo.png" style="height: 60px;" />
					</router-link>
				</div>
				<div style="width:80%"><MyHeader /></div>
			</div>
		</div>
		<div class="main_show">
			<transition name="view"> <router-view /> </transition>
		</div>
		<div class="common_width main_footer"><MyFooter /></div>
	</div>
</template>
<script>
import MyHeader from '../components/Header';
import MyFooter from '../components/Footer';
export default {
	components: {
		MyHeader,
		MyFooter
	},
	data() {
		return {};
	},
	watch: {
		$route(to, from) {}
	},
	mounted() {
		let _this = this;
		window.onresize = function() {
			_this.$store.commit('screenResize');
		};
	}
};
</script>

<style scoped lang="less">
.main {
	.fixed{
		top: 0;
		z-index: 99;
	}
	.main_header {
		border-bottom: 3px solid @borderc5;
		img{
			height: 80px;
		}
	}
	.main_show {
		padding: 10px 0;
		min-height: 800px;
		margin-top:120px;
	}
	.main_footer {
		border-top: 3px solid @borderc5;
	}
}

.view-enter-active {
	transition: opacity 0.4s;
}

.view-leave-active {
}

.view-enter,
.view-leave-active {
	opacity: 0;
}
</style>
