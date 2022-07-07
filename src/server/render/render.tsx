// @ts-ignore
import React from 'react';
import type { Request, Response } from 'express';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { App } from '../../ssr';

const sheet = new ServerStyleSheet();

export const render = (req: Request, res: Response) => {
  const reactHTNL = ReactDOMServer.renderToStaticMarkup(
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </StyleSheetManager>,
  );
  res.send(reactHTNL);
};
