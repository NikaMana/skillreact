const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

const compiler = webpack(webpackConfig);

compiler.run((err) => {
  if (err) {
    console.log('Compilation failed: ', err);
  }
  
});