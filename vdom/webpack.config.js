const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        hot: true,
        contentBase: './dist'
    },
    plugins:[new HtmlWebpackPlugin({template: './src/index.html'}),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}