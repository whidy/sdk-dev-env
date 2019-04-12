const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: {
    base: './src/base.js',
    pro: './src/pro.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // https://babeljs.io/docs/en/options#rootmode
            rootMode: 'upward'
          }
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
