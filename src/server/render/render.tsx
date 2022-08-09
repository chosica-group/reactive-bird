import type { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { configureInitialStore } from 'store';
import { setUserId, setUserLoggedIn, setUserTheme, setUserThemeName } from 'store/auth-reducer';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { renderObject } from 'utils/server-side/render-object';
import { App } from '../../ssr';
import { authMiddleware } from './auth';

const { store } = configureInitialStore();

const getTheme = async (themeName: string) => {
  await fetch(`http://localhost:3000/my-app/v1/theme/${themeName}`)
    .then((data) => data.json())
    .then((theme) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (theme.theme_name) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        store.dispatch(setUserTheme(theme));
      }
    })
    .catch((err) => console.log(err));
};

const getUserTheme = async (id: number) => {
  await fetch(`http://localhost:3000/my-app/v1/theme/user/${id}`)
    .then((data) => data.json())
    .then(async (userTheme) => {
      console.log(userTheme, '// @ts-userTheme11111');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (userTheme.theme_name) {
        console.log(userTheme, 'userThemeuserTheme');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        store.dispatch(setUserThemeName(userTheme.theme_name));
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        await getTheme(userTheme.theme_name);
      }
    })
    .catch((err) => console.log(err));
};

export const render = async (req: Request, res: Response) => {
  // console.log(req.locals.userInfo, 'reqqqqq');
  // let userInfo;
  console.log(req.headers.cookie, 'req.headers.cookie');
  if (req.headers.cookie) {
    await fetch('https://ya-praktikum.tech/api/v2/auth/user', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Cookie: `${req.headers.cookie || ''}`,
      },
    })
      .then((data) => data.json())
      .then(async (user) => {
        console.log(user, 'user 1111');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (user.reason) {
          console.log('user.id');
          store.dispatch(setUserLoggedIn(true));
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          store.dispatch(setUserId(1234));
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          await getUserTheme(1234);
        }
      })
      .catch((err) => console.log(err));
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
