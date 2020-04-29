const path = require('path');
const MiniCssExtarctPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,/**.cssファイル名を検知するシステム */
        use: [
          {
            loader: MiniCssExtarctPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtarctPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
