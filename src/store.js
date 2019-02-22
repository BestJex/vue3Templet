import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		w: document.documentElement.offsetWidth || document.body.offsetWidth,
		h: document.documentElement.offsetHeight || document.body.offsetHeight,
	},
	mutations: {
		screenResize() {
			let _this = this;
			_this.state.w = document.documentElement.offsetWidth || document.body.offsetWidth;
			_this.state.h = document.documentElement.offsetHeight || document.body.offsetHeight;
		},
	},
	actions: {

	}
})
