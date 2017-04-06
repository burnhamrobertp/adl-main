const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './resources/assets/js/'),
    entry: {
        app: './app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/js')
    },

    resolve: {
        modules: [
            path.resolve(__dirname, 'resources', 'assets', 'js'),
            path.resolve(__dirname, 'resources', 'assets'),
            'node_modules'
        ]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        /**
         * Dependencies used at least minChunk times are split into a separate bundle
         */
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2,
        }),
    ]
};