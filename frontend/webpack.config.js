const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
      port: 8080
  },
  target: 'node',
  plugins: [
    new NodemonPlugin()
  ]
}