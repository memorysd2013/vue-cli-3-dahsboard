module.exports = {
    runtimeCompiler: true,
    transpileDependencies: [
      'vue-echarts',
      'resize-detector'
    ],
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-cli-3-dahsboard/'
    : '/'
  }
