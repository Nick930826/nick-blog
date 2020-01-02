const withLessExcludeAntd = require('./next-less.config.js')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const path = require('path')
const withCss = require('./next-css.config')

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => { }
}

module.exports = withCss(withLessExcludeAntd({
  /* config options here */
  distDir: './dist',
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
    camelCase: true
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: {
      'border-radius-base': '0',
      'border-radius-sm': '0',
      'btn-shadow': 'none',
      'btn-primary-shadow': 'none'
    }
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
      })
    )
    Object.assign(config.resolve.alias, {
      components: path.resolve(__dirname, './components'),
      pages: path.resolve(__dirname, './pages'),
      utils: path.resolve(__dirname, './utils'),
      services: path.resolve(__dirname, './services')
    })
    return config
  }
}))
