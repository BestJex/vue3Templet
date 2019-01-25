<template>
	<div class="main absolute ">
		<div class="main_common main_header flex flex_align_center ">
			<div style="width:20%">
				<router-link to="/index">
					<img src="../assets/1.png" style="height: 60px;" />
				</router-link>
			</div>
			<div style="width:70%"><MyHeader /></div>
		</div>
		<div class="main_show">
			<transition name="view"> <router-view /> </transition>
		</div>
		<div class="main_common main_footer"><MyFooter /></div>
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
	}
};
</script>

<style scoped lang="less">
.main {
	width: 99%;
	padding: 10px 0.5%;
	min-width: 1210px;
	top: 0;
	bottom: 0;
	.main_common {
		width: 80%;
		padding: 10px 0;
		margin: 0 auto;
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
