const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

module.exports = {
  target: "node",
  entry: path.resolve(__dirname, )
};