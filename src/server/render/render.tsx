// @ts-ignore
import React from 'react';
import type { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { configureInitialStore } from 'store';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { App } from '../../ssr';

const { store } = configureInitialStore();
export const render = (req: Request, res: Response) => {
  const sheet: ServerStyleSheet = new ServerStyleSheet();
  const context: StaticRouterContext = {};
  let indexHTML = fs.readFileSync(path.resolve(__dirname, '../static/index.html'), {
    encoding: 'utf-8',
  });

  const reactHTNL = ReactDOMServer.renderToStaticMarkup(
    <StyleSheetManager sheet={sheet.instance}>
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    </StyleSheetManager>,
  );

  indexHTML = indexHTML.replace(
    `<div id="root"></div>`,
    `<div id="root">${reactHTNL}</div>
    <script>window.__PRELOADED_STATE__={test: 1234}</script>
    <script src="main.js"></script>`,
  );
  return res.send(indexHTML);
};
