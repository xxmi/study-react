const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (...args) => {
  return path.resolve(__dirname, ...args);
};

module.exports = {
  mode: "development",
  entry: {
    index: './src/examples/index.js',
    router: './src/router/index.js',
  },
  output: {
    path: resolve('dist'),
    filename: '[name].bound.js',
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        include: [resolve('./src')],
        exclude: [/node_modules/],
        loader: "babel-loader",
        options: {},
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve('./index.html'),
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: "router.html",
      template: resolve('./index.html'),
      chunks: ['router'],
    }),
  ],
};
