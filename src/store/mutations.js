const mutations = {
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
}
export default mutations