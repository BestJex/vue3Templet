import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		w: document.documentElement.offsetWidth || document.body.offsetWidth,
		h: document.documentElement.offsetHeight || document.body.offsetHeight,
		login: false,
	},
	mutations,
	actions
})
