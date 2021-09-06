const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

const libraryName = 'meowji';
const version = require('./package.json').version;
const banner = `
Meowji v${version}
Licensed under MIT (https://github.com/jasmaa/meowji/blob/master/LICENSE)
`;

module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `${libraryName}.min.js`,
    library: libraryName,
    libraryTarget: 'umd',
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
  plugins: [
    new webpack.BannerPlugin(banner),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
}