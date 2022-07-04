import React from "react";
import { Request, Response } from 'express';
import { App } from '../../src/ssr';
import * as ReactDOMServer from 'react-dom/server';

export const render =  (req: Request, res: Response) => {
  const reactHTNL = ReactDOMServer.renderToStaticMarkup(<App />)
  res.send(reactHTNL);
}