const path = require('path');
const MiniCssExtarctPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/javascript/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'javascripts/main.js',
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
      {
        test: /\.(png|jpg)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtarctPlugin({
      filename: './stylesheets/main.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
}
