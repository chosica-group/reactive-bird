require('dotenv').config();
const { merge } = require('webpack-merge');
const common = require('./common.js');
const { srcPath } = require('./path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const BUILD_ANALYZE_PORT = process.env.BUILD_ANALYZE_PORT ?? 8888;

module.exports = ({ ANALYZE }) => {
  const plugins = [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ];

  if (ANALYZE) {
    plugins.push(
      new BundleAnalyzerPlugin({
        defaultSizes: 'gzip',
        openAnalyzer: true,
        analyzerMode: 'server',
        analyzerPort: BUILD_ANALYZE_PORT,
      }),
    );
  }

  return merge(common, {
    mode: 'production',
    entry: {
      main: path.resolve(srcPath, 'index.tsx'),
      'sw': path.resolve(srcPath, 'sw.js'),
    },
    module: {
      rules: [
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
      ],
    },
    devtool: 'source-map',
    optimization: {
      providedExports: true,
      // числовые идентификаторы ориентированы на минимальный общий размер загрузки.
      chunkIds: 'total-size',
      // Короткие имена - обычно один символ - ориентированы на минимальный размер загрузки.
      mangleExports: 'size',
      // искажает имена модулей и экспорта, изменив импорт на более короткие строки
      mangleWasmImports: true,
      moduleIds: 'size',
      removeAvailableModules: true,
      usedExports: true,
      sideEffects: true,
      innerGraph: true,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: true,
            format: {
              comments: false,
            },
          },
          extractComments: true,
        }),
      ],
    },
    plugins: plugins,
    stats: {
      usedExports: true,
      providedExports: true,
      env: true,
    },
    output: {
      clean: true,
    },
    performance: {
      hints: false,
    },
  });
};
