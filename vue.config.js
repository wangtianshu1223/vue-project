const path = require('path')
const resolve = dir => path.join(__dirname, dir)
process.env.VUE_APP_NAME = require('./package.json').name.toLocaleUpperCase()
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/wts',
  runtimeCompiler: true,
  lintOnSave: false, // 去掉eslint
  chainWebpack: config => {
      config.resolve.alias
          .set('@', resolve('src'))
  }
  
}