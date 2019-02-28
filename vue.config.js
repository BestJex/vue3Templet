/*
 * @Author: xyz
 * @Date:   2018-12-26 10:31:06
 * @Last Modified by:   xyz
 * @Last Modified time: 2019-02-27 15:56:28
 */
// vue.config.js 需要自己手动建立 相当于2.0的config文件夹

const path = require('path')
module.exports = {
	// 全局less
	baseUrl: process.env.VUE_APP_BASEURL, //部署网站根路径
	outputDir: process.env.VUE_APP_OUTPUTDIR, //打包的时候生成的一个文件名
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [
				path.resolve(__dirname, './public/less/variables.less')
			]
		}
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					require("postcss-px2rem")({
						'remUnit': 75, //根据设计稿调整
					})
				]
			}
		}
	},
	devServer: {
// 		proxy: {
// 			'/tapi': {
// 				target: process.env.VUE_APP_APIBASE, // target host
// 				ws: true, // proxy websockets 
// 				changeOrigin: true, // needed for virtual hosted sites
// 				pathRewrite: {
// 					'^/tapi': '' // rewrite path
// 				}
// 			},
// 		}
	}
}