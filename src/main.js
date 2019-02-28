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
	next()
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')