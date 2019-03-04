import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/index',
		name: 'main',
		component: () =>
			import ('./views/Main.vue'),
		children: [{
			path: '/',
			name: '首页',
			component: () =>
				import ('./views/index.vue')
		}, {
			path: '/page2',
			name: 'page2',
			component: () =>
				import ('./views/page2.vue')
		}, {
			path: '/page3',
			name: 'page3',
			component: () =>
				import ('./views/page3.vue')
		}, {
			path: '/page4',
			name: 'page4',
			component: () =>
				import ('./views/page4.vue')
		}, {
			path: '/page5',
			name: 'page5',
			component: () =>
				import ('./views/page5.vue')
		}, {
			path: '/page6',
			name: 'page6',
			component: () =>
				import ('./views/page6.vue')
		}, {
			path: '/show',
			name: 'page7',
			component: () =>
				import ('./views/page7.vue')
		}]
	},{
			path: '/login',
			name: 'login',
			component: () => import('./views/Login.vue')
		}, {
			path: '/register',
			name: 'register',
			component: () => import('./views/Register.vue')
		},  { 
		path: '/help',
		name: 'help',
		component: () =>
			import ('./views/help.vue')
	},
	{ 
		path: '/404',
		name: '404',
		component: () =>
			import ('./views/404.vue')
	},{ 
		path: '/CV',
		name: 'CV',
		component: () =>
			import ('./views/xyz.vue')
	}, { // 重定向
		path: '/',
		redirect: '/index'
	}]
})