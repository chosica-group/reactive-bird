import type { Compiler } from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';

export const webpackHot = (compiler: Compiler) =>
  webpackHotMiddleware(compiler as any, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 1000,
  });
