const path = require('path');
const { distPath, rootPath, srcPath } = require('./path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  context: process.cwd(),
  entry: {
    main: path.resolve(srcPath, 'index.tsx'),
  },
  output: {
    path: distPath,
    filename: '[name].js',
    publicPath: '/',
    assetModuleFilename: 'static/images/[name][ext]',
  },
  resolve: {
    alias: {
      components: path.join(srcPath, 'components'),
      layout: path.join(srcPath, 'layout'),
      providers: path.join(srcPath, 'providers'),
      pages: path.join(srcPath, 'pages'),
      utils: path.join(srcPath, 'utils'),
      store: path.join(srcPath, 'store'),
    },
    extensions: ['.tsx', '.ts', '.js'],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
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
