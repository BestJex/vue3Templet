import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		w: document.documentElement.offsetWidth || document.body.offsetWidth,
		h: document.documentElement.offsetHeight || document.body.offsetHeight,
		login: false,
	},
	mutations: {
		screenResize() {
			let _this = this;
			_this.state.w = document.documentElement.offsetWidth || document.body.offsetWidth;
			_this.state.h = document.documentElement.offsetHeight || document.body.offsetHeight;
		},
		login(state, data) {
			let _this = this;
			_this.state.login = true
			_this.state.userToken = data.token
			localStorage.setItem('isLogin', true)
		},
	},
	actions: {

	}
})
