import * as path from 'path';
import type { Compiler } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

export const webpackDev = (compiler: Compiler) =>
  webpackDevMiddleware(compiler as any, {
    publicPath: path.posix.resolve('dist'),
    writeToDisk: true,
  });
