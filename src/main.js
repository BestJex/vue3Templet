import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store/store'
import '../public/less/variables.less'
import '../public/less/reset.less'
import '../public/less/base.less'
import '../public/less/common.less'
import './plugins/element.js'
import 'lib-flexible'
Vue.config.productionTip = false
Vue.prototype.$store = store

router.beforeEach((to, from, next) => {

	if (to.matched.length === 0) {
		next({
			path: '/page404'
		})
	} else {

		next()

	}

})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
