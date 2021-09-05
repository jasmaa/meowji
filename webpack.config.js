const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const libraryName = 'meowji';

module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `${libraryName}.min.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
}