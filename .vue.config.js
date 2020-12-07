const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  baseUrl: './',
  runtimeCompiler: true,
  lintOnSave: false, // 去掉eslint
  chainWebpack: config => {
      config.resolve.alias
          .set('@', resolve('src'))
  }
}