import {
	Loading,
	Message
} from 'element-ui'
import Vue from 'vue'
// import '../../src/plugins/axios'
const apiPath = {

}
const actions = {
	apiRequest({
		commit
	}, {
		apiUrl,
		params,
		typ
	}) {
		console.log(apiPath[apiUrl])
		console.log({
			params
		})
		console.log(typ)
		let loading = Loading.service({
				lock: true,
				text: '数据请求中，请稍后',
				background: 'rgba(0, 0, 0, 0.7)'
			}),
			_this = this;
		return new Promise((resolve, reject) => {
			// this.$axios.post
			Vue.prototype.$axios.post(apiPath[apiUrl], {
				params
			}).then(function(r) {
				// console.log(r)
				loading.close()
				if (r.status === 200) {
					resolve(r.data)
				}

			}).catch(function(error) {
				console.log(error)
				Message.error(error.message);
				loading.close()
				reject(error)
			})
		})
	}
}
export default actions