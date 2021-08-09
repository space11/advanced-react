const path = require('path');

module.exports = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  entry: {
    vendor: ['react', 'react-dom', 'axios'],
    app: [path.resolve('./lib/renderers/dom.js')]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // match the entry point and spit out the file named here
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          filename: 'vendor.js',
          enforce: true,
        },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  },
};
