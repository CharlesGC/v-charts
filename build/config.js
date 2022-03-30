var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../src/component-list');
var externals = {};

externals = [Object.assign({
  vue: 'vue',
  ecahrts: 'echarts'
}, externals), nodeExternals()];

const vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

module.exports = {
  vue,
  externals,
  addons: {
    'index.esm': './src/index.es.js',
    'core': './src/core.js',
    'utils': './src/utils.js',
    'constants': './src/constants.js',
  }
}
