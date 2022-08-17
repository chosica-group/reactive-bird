const path = require('path');
const { distPath, rootPath, srcPath } = require('./path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'none',
  context: process.cwd(),
  output: {
    path: distPath,
    filename: '[name].js',
    publicPath: '/',
    assetModuleFilename: 'static/images/[name][ext]',
  },
  resolve: {
    alias: {
      components: path.join(srcPath, 'components'),
      server: path.join(srcPath, 'server'),
      layout: path.join(srcPath, 'layout'),
      providers: path.join(srcPath, 'providers'),
      pages: path.join(srcPath, 'pages'),
      assets: path.join(srcPath, 'assets'),
      utils: path.join(srcPath, 'utils'),
      assets: path.join(srcPath, 'assets'),
      store: path.join(srcPath, 'store'),
      services: path.join(srcPath, 'services'),
    },
    extensions: ['.tsx', '.ts', '.js'],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack',
      },
      {
        test: /\.(png|wav|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(rootPath, '.env'),
      allowEmptyValues: false,
    }),
  ],
};
