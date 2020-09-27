module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    open: true,
    port: 8080,
    host: 'localhost',
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map',
  }, // for webpack config
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       prependData: "@import '@/styles/_vars.scss';",
  //     },
  //   },
  // },
}
