
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
const resolve = dir => {
  return path.join(__dirname, dir)
}




// const BASE_URL = process.env.NODE_ENV === 'production'
//   ? '/'
//   : '/'
// 覆盖默认的webpack配置

module.exports = {
  // baseUrl: BASE_URL,

  // 如果不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('pages', resolve('src/pages')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('common', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('mixins', resolve('src/mixins'))
    config.module.rules.delete('svg')
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/components/SvgIcon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 preload 插件
    config.plugins.delete('preload');
  },
  // 打包时不生成.map文件
  productionSourceMap: !isProd,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }

  // configureWebpack: {
  //   externals: {
  //     'vue': 'Vue',
  //     'vue-router': 'VueRouter',
  //     'vuex': 'Vuex',
  //     'axios': 'axios',
  //     'moment': 'moment',
  //     'nprogress': 'NProgress'
  //   },
  //   plugins
  // },


}
