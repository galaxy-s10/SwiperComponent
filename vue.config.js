module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.zhengbeining.com/api/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'store': '@/store',
        'views': '@/views'
      }
    }
  }
}