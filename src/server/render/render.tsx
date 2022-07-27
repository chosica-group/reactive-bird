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
import { renderObject } from 'utils/server-side/render-object';
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

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const storeString = `window.__PRELOADED_STATE__ = ${renderObject(store.getState())}`;

  indexHTML = indexHTML.replace(
    `<div id="root"></div>`,
    `<div id="root">${reactHTNL}</div>
    <script
    dangerouslySetInnerHTML={{
      __html: ${storeString},
    }}
  />
    <script src="main.js"></script>`,
  );
  return res.send(indexHTML);
};
