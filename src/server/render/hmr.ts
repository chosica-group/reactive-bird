import type { RequestHandler } from 'express';
import { render } from './render';
import { webpackDev } from './webpack-dev';
import { webpackHot } from './webpack-hot';

const webpack = require('webpack');

const common = require('../../../webpack/common.js');

export function getWebpackMiddlewares(mode: string): RequestHandler[] {
  const compiler = webpack(common);

  const middlewares = [];
  if (mode === 'development') {
    middlewares.push(webpackDev(compiler));
    middlewares.push(webpackHot(compiler));
  }

  middlewares.push(render);

  return middlewares;
}
