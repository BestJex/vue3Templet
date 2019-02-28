<template>
	<div class="main  ">
		<div class="fixed " style="background: #fff;">
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
	.main_show {
		height: 1000px;
	}
	.main_header {
		border-bottom: 2px solid @borderc5;
	}
	.main_show {
		padding: 20px 0;
		min-height: 400px;
	}
	.main_footer {
		border-top: 1px solid @borderc5;
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
