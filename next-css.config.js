const cssLoaderConfig = require('@zeit/next-css/css-loader-config')

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack (config, options) {
      const { dev, isServer } = options
      const {
        cssModules,
        cssLoaderOptions,
        postcssLoaderOptions
      } = nextConfig

      // 禁用wxb模块的cssModules
      config.module.rules.push({
        test: /\.css$/,
        use: cssLoaderConfig(config, {
          extensions: ['css'],
          cssModules,
          cssLoaderOptions,
          postcssLoaderOptions,
          dev,
          isServer
        }),
        exclude: /node_modules/
      })
      config.module.rules.push({
        test: /\.css$/,
        use: cssLoaderConfig(config, {
          extensions: ['css'],
          cssModules: false,
          cssLoaderOptions,
          postcssLoaderOptions,
          dev,
          isServer
        }),
        include: /node_modules/
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
