const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src'),
  output: { path: path.resolve(__dirname, './public'), filename: 'bundle.js' },
  module: {
    rules: [
      {
        test: /\.js[x]?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
