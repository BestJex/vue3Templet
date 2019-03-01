<template>
	<div class="flex flex_align_center">
		<i class="iconfont" :style="{'fontSize':size,'color':color}" @click="checkClick">{{ isChecked ? '&#xe64c;' : '&#xe64a;' }}</i
		><slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		checked: {
			type: Boolean,
			default: true
		},
		size:{
			type:String,
			default:'18px'
		},
		color:{
			type:String,
			default:'#000'
		}
	},
	data() {
		return {
			isChecked:this.checked
		};
	},
	watch: {},
	methods: {
		checkClick() {
			this.isChecked = !this.isChecked;
			this.$emit('checkClick',this.isChecked);
		}
	},
	created() {},
	mounted() {}
};
</script>

<style scoped lang="less">
	
</style>
