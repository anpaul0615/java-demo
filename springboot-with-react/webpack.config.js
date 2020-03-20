const Path = require('path');

module.exports = {
  entry: {
    home: Path.resolve(__dirname, 'src/main/jsx/com/example/pages/Home.js'),
    about: Path.resolve(__dirname, 'src/main/jsx/com/example/pages/About.js'),
    message: Path.resolve(__dirname, 'src/main/jsx/com/example/pages/Message.js'),
  },
  output: {
    path: Path.resolve(__dirname, 'src/main/webapp'),
    filename: 'jsx/[name].bundle.js',
    chunkFilename: 'jsx/[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  }
};