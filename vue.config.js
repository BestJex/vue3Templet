/*
 * @Author: xyz
 * @Date:   2018-12-26 10:31:06
 * @Last Modified by:   xyz
 * @Last Modified time: 2018-12-26 11:29:53
 */
// vue.config.js 需要自己手动建立 相当于2.0的config文件夹

const path = require('path')
module.exports = {
	// 全局less
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [
				'C:\\Users\\tanyan\\Desktop\\xcx_component\\mhwz\\public\\less\\variables.less'
			]
		}
	}
}
