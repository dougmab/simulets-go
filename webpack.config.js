const path = require('path');

const stylesHandler = 'style-loader';

const config = {
  mode: 'development',
  entry: {
    'js/login.min': './client/src/js/login/index.js',
    'js/app.min': './client/src/js/app/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'client', 'static', 'assets'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
