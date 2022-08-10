import type { RequestHandler } from 'express';
import { authMiddleware } from './auth';
import { getTheme } from './get-theme-middlware';
import { getUserTheme } from './get-user-theme-middlware';
import { render } from './render';
import { webpackDev } from './webpack-dev';
import { webpackHot } from './webpack-hot';

const webpack = require('webpack');

const common = require('../../../webpack/common.js');

export function getWebpackMiddlewares(mode: string): RequestHandler[] {
  const compiler = webpack(common);

  const middlewares = [authMiddleware, getUserTheme, getTheme, render];
  if (mode === 'development') {
    // middlewares.push(webpackDev(compiler));
    // middlewares.push(webpackHot(compiler));
  }

  return middlewares;
}
