const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    optimization: {
        nodeEnv: 'development',
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        contentBase: path.resolve('public'),
        hot: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
});
