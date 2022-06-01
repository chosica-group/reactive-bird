require('dotenv').config();
const path = require('path');
const { merge } = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const common = require('./common.js');
const { rootPath, staticPath, distPath, srcPath } = require('./path');

const { DEV_SERVER_PORT = 3000 } = process.env;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: srcPath,
        exclude: /node_modules/,
        options: {
          // отключает проверку типов
          transpileOnly: true,
          happyPackMode: true,
          getCustomTransformers: () => ({
            before: [ReactRefreshTypeScript()],
          }),
        },
      },
    ],
  },
  resolve: {
    symlinks: false,
    cacheWithContext: false,
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.join(rootPath, '.webpack_cache'),
    buildDependencies: {
      config: [__filename],
    },
  },
  stats: 'errors-only',
  devServer: {
    static: distPath,
    // открыть браузер после запуска сервера
    open: true,
    // index.html страница вместо любых 404 ответов
    historyApiFallback: true,
    compress: false,
    port: DEV_SERVER_PORT,
    client: {
      // Показывает полноэкранное наложение в браузере при появлении ошибок компилятора или предупреждений.
      overlay: false,
      // Выводит прогресс компиляции в процентах в браузере.
      progress: false,
      // Сколько раз он должен пытаться повторно подключить клиента
      reconnect: 5,
    },
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new ForkTsCheckerNotifierWebpackPlugin({
      excludeWarnings: true,
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      include: /dir/,
      failOnError: true,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(staticPath, 'index.html'),
    }),
  ],
  optimization: {
    /**
     * создает дополнительный фрагмент для кода среды выполнения,
     * поэтому его создание обходится дешево
     */
    runtimeChunk: true,
    /**
     *  дополнительную алгоритмическую работу для оптимизации выходных данных
     *  с учетом размера и производительности загрузки.
     *  Эти оптимизации эффективны для небольших кодовых баз,
     *  но могут быть дорогостоящими в больших
     */
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  output: {
    pathinfo: false,
  },
});
