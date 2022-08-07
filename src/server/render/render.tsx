// import { useState } from 'react';
import type { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { configureInitialStore } from 'store';
import type { AuthState } from 'store/auth-reducer';
import { authReducer, setUserId, setUserLoggedIn, setUserTheme } from 'store/auth-reducer';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { renderObject } from 'utils/server-side/render-object';
import { App } from '../../ssr';
import { authMiddleware } from './auth';

const { store } = configureInitialStore();

const getUserTheme = async (id: number) => {
  await fetch(`http://localhost:3000/my-app/v1/theme/user/${id}`)
    .then((data) => data.json())
    .then((userTheme) => {
      console.log(userTheme, '// @ts-userTheme11111');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (userTheme.theme_name) {
        console.log(userTheme, 'userThemeuserTheme');
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        store.dispatch(authReducer(setUserTheme(userTheme.theme_name)));
      }
    })
    .catch((err) => console.log(err));
};

export const render = async (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.locals.userInfo, 'reqqqqq');
  // let userInfo;
  await fetch('https://ya-praktikum.tech/api/v2/auth/user')
    .then((data) => data.json())
    .then((user) => {
      console.log(user, '// @ts-ignore1111');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (user.id) {
        console.log(user, '// @ts-ignore');
        // @ts-ignore
        store.dispatch(authReducer(setUserLoggedIn(true)));
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        store.dispatch(authReducer(setUserId(user.id)));
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-floating-promises
        getUserTheme(user.id);
      }
    })
    .catch((err) => console.log(err));
  // const { data } = useGetUserQuery();
  // if (user && user.id) {
  //   // userId = data.id;
  //   // skip = false;
  //   // @ts-ignore
  //   store.dispatch(authReducer(setUserLoggedIn(true)));
  //   // @ts-ignore
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call
  //   store.dispatch(authReducer(setUserId(user.id)));
  // }
  // if (userTheme) {
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  //   if (userTheme) {
  //     // @ts-ignore
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  //     store.dispatch(authReducer(setUserTheme(userTheme.theme_name)));
  //   }
  // }
  console.log(store.getState());
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
  const storeString = `window.__PRELOADED_STATE__ = ${renderObject(store)}`;

  indexHTML = indexHTML.replace(
    `<div id="root"></div>`,
    `<script>${storeString}</script>
    <div id="root">${reactHTNL}</div>
    <script src="main.js"></script>`,
  );
  return res.send(indexHTML);
};
