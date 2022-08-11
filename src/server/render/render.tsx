/* eslint-disable @typescript-eslint/no-unsafe-argument */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { lightTheme } from 'server/models/theme-data';
import type { TSiteTheme } from 'server/models/types';
import { configureInitialStore } from 'store';
import { setUserId, setUserLoggedIn } from 'store/auth-reducer';
import { setUserTheme, setUserThemeName } from 'store/theme-reduser';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { renderObject } from 'utils/server-side/render-object';
import { App } from '../../ssr';
import { getTheme } from './get-theme-middlware';
import { getUserTheme } from './get-user-theme-middlware';

const { store } = configureInitialStore();

type TUserData = {
  id: number;
  theme_name?: string;
  theme_data?: TSiteTheme;
};

export const render = async (req: Request, res: Response) => {
  if (res.locals.user) {
    const user = res.locals.user as unknown as TUserData;
    store.dispatch(setUserLoggedIn(true));
    store.dispatch(setUserId(user.id));
    const userTheme = await getUserTheme(user.id);
    store.dispatch(setUserThemeName(userTheme || 'light'));
    const themeData = await getTheme(userTheme || 'light');
    store.dispatch(setUserTheme(themeData || lightTheme));
  }
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
  const storeString = `window.__PRELOADED_STATE__ = ${renderObject(store.getState())}`;

  indexHTML = indexHTML.replace(
    `<div id="root"></div>`,
    `<script>${storeString}</script>
    <div id="root">${reactHTNL}</div>
    <script src="main.js"></script>`,
  );
  return res.send(indexHTML);
};
