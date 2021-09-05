const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

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
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
        use: {
          loader: 'svgo-loader',
        },
        generator: {
          dataUrl: content => {
            content = content.toString();
            return svgToMiniDataURI(content);
          }
        }
      },
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
}