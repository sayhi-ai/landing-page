var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    entry: "./src/js/index.js",
    module: {
        loaders: [
            {test: /\.scss|\.sass|\.css$/, loaders: ["style", "css", "sass"], exclude: /node_modules/},
            {test: /\.less$/, loader: "style!css!less", exclude: /node_modules/},
            {test: /\.ttf$|\.otf$|\.eot$|\.woff$|\.woff2$/, loader: "url-loader?limit=100000"},
            {test: /\.jpe?g$|\.png$/, loader: "file-loader"},
            {test: /\.svg$/, loader: "svg-inline"},
            {test: /load-image/, loader: 'imports?define=>false'},
            {test: /\.json$/, loader: "json-loader"},
            {test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel-loader'}
        ]
    },
    output: {
        path: "./dev",
        filename: "bundle.min.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new CopyWebpackPlugin([
            { from: 'static'}
        ])
    ]
};
