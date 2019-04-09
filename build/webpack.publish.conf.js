/*
 * @Author: lifangfang
 * @Date:   2018-12-04 16:08:53
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2018-12-04 19:19:11
 */
'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

baseWebpackConfig.entry = {};
baseWebpackConfig.module.rules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: vueLoaderConfig
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [resolve('src')]
  },
  {
    test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: utils.assetsPath('fonts/[name].[ext]')
    }
  }
]
var webpackConfig = merge(baseWebpackConfig, {
    entry: {
        ekwing: './src/ekwing/src/index.js'
    },
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.publish.productionSourceMap,
            extract: true,
            usePostCSS: true
        })
    },
    devtool: config.publish.productionSourceMap ? "#source-map" : false,
    output: {
        path: config.publish.distRoot,
        filename: 'index.js',
        publicPath: config.publish.assetsPublicPath,
        library: 'ekwing',
    	libraryTarget: 'umd',
    	umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.publish.env
        }),
        new ExtractTextPlugin({
            filename: utils.assetsPath('index.css'),
            // Setting the following option to `false` will not extract CSS from codesplit chunks.
            // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
            // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`, 
            // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
            // allChunks: true,
        }),
        // // Compress extracted CSS. We are using this plugin so that possible
        // // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        // keep module.id stable when vendor modules does not change
        new webpack.HashedModuleIdsPlugin(),
        // enable scope hoisting
    ]
});
module.exports = webpackConfig
