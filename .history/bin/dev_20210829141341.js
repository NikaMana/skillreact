const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const node
const compiler = webpack(webpackConfig);

compiler.run((err) => {
  if (err) {
    console.log('Compilation failed: ', err);
  }
  compiler.watch({}, (err) => {
    if (err) {
      console.log('Compilation failed: ', err);
    }
  })
});