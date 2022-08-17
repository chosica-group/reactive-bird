import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Router } from 'express';
import helmet from 'helmet';
import { createProxyMiddleware } from 'http-proxy-middleware';
// import https from 'https';
import path from 'path';
import { initDB } from './models';
import { getWebpackMiddlewares } from './render/hmr';
import { themeRoutes } from './router/theme-routes';
import { userThemeRoutes } from './router/user-theme-routes';

// const selfSigned = require('openssl-self-signed-certificate');
const srcDirectives = ["'self'", 'https://ya-praktikum.tech'];

const app = express();

app
  .use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: srcDirectives,
          scriptSrc: [...srcDirectives, "'unsafe-inline'", "'unsafe-eval'"],
          imgSrc: srcDirectives,
        },
      },
      crossOriginEmbedderPolicy: false,
      xssFilter: true,
    }),
  )
  .use(cookieParser())
  .use(express.json())
  .use(express.static(path.resolve(__dirname, '../public')));

const router: Router = Router();
const PORT = process.env.PORT || 3000;
const themeRouter = themeRoutes(router);
const userThemeRouter = userThemeRoutes(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? 'https://chosica-reactive-bird-14.ya-praktikum.tech'
        : 'http://localhost:3000',
    credentials: true,
  }),
);
// app.use(
//   '/api',
//   createProxyMiddleware({
//     target: 'http://localhost:3000',
//     cookieDomainRewrite: 'localhost',
//   }),
// );
// app.use(router);
app.use(themeRouter);
app.use(userThemeRouter);
app.get('/*', getWebpackMiddlewares(process.env.NODE_ENV || 'production'));
initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Running on ${PORT}`);
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // https.createServer({ key: selfSigned.key, cert: selfSigned.cert }, app).listen(PORT, () => {
    //   console.info(`https://localhost:${PORT}`);
    // });
  })
  .catch((err) => console.log(err, 'initDb error'));
