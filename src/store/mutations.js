const mutations = {
	screenResize() {
		let _this = this;
		_this.state.w = document.documentElement.offsetWidth || document.body.offsetWidth;
		_this.state.h = document.documentElement.offsetHeight || document.body.offsetHeight;
	},
	login(){
		this.state.login = true;
		localStorage.setItem('isLogin',true)
	},
	loginOut(){
		this.state.login = false;
		localStorage.setItem('isLogin',false)
	}	
}
export default mutations