const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    name: 'server',
    target: 'node',
    node: {__dirname: false},
    entry: path.posix.resolve('src/server/index.ts'),
    module: {
        rules: [
            {
                test: /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/,
                loader: 'null-loader',
            },
            {
                test: /\.css$/,
                loader: 'null-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: path.join(__dirname, '..', 'tsconfig.json'),
                    transpileOnly: true,
                    happyPackMode: true,
                },
                },
            {
                test: /\.(mp3|wav|mpe?g|ogg)$/,
                loader: 'null-loader',
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            window: path.resolve(path.join(__dirname, '../webpack/mock/window.mock')),
            document: 'global/document',
        }),
        new webpack.BannerPlugin({
            banner: 'require("source-map-support").install();',
            raw: true,
            entryOnly: false
        }),
    ],
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        path: path.posix.resolve('dist'),
        publicPath: path.posix.resolve(__dirname, '/'),
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    },

    devtool: 'source-map',

    performance: {
        // hints: mode === 'development' ? false : 'warning',
        hints: false,
    },
    externals: [nodeExternals({allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i]})],

    optimization: {nodeEnv: false},
};