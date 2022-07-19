// @ts-ignore
import React from 'react';
import type { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { App } from '../../ssr';

export const render = (req: Request, res: Response) => {
  const sheet: ServerStyleSheet = new ServerStyleSheet();
  let indexHTML = fs.readFileSync(path.resolve(__dirname, '../../src/static/index.html'), {
    encoding: 'utf-8',
  });

  const reactHTNL = ReactDOMServer.renderToStaticMarkup(
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </StyleSheetManager>,
  );

  indexHTML = indexHTML.replace(
    `<div id="root"></div>`,
    `<div id="root">${reactHTNL}</div>
    <script src="main.js"></script>`,
  );
  return res.send(indexHTML);
};
