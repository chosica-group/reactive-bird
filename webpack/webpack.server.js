const path = require('path');
const common = require('./common.js');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const { NODE_ENV = 'development' } = process.env;


module.exports = merge(common, {
    mode: NODE_ENV,
    name: 'server',
    target: 'node',
    node: {__dirname: false},
    entry: path.posix.resolve('src/server/render/render.tsx'),
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
                    // отключает проверку типов
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
        hints: NODE_ENV === 'development' ? false : 'warning',
    },
    externals: [nodeExternals({allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i]})],

    optimization: {nodeEnv: false},
});