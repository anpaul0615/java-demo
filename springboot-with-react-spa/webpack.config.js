const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: Path.resolve(__dirname, 'src/main/jsx/com/example/main.js'),
  },
  output: {
    path: Path.resolve(__dirname, 'src/main/webapp'),
    filename: 'jsx/main.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Dev Server Page' }),
  ],
  devServer: {
    historyApiFallback: true
  }
};