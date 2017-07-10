const
    path = require('path'),
    webpack = require('webpack'),
    CompressionPlugin = require("compression-webpack-plugin");

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
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'resources', 'assets', 'js'),
            path.resolve(__dirname, 'resources', 'assets'),
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env'],
                        plugins: ['transform-object-rest-spread', 'babel-plugin-transform-class-properties']
                    }
                }]
            },
            {
                test: /\.(css|sass|scss)$/,
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
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|html)$/,
            threshold: 10240,
            minRatio: 0.8
        }),
    ]
};