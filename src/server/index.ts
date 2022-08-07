import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Router } from 'express';
import path from 'path';
import { initDB } from './models';
import { getWebpackMiddlewares } from './render/hmr';
import { themeRoutes } from './router/theme-routes';
import { userThemeRoutes } from './router/user-theme-routes';

const app = express();
const router: Router = Router();
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

const PORT = process.env.PORT || 3000;
const themeRouter = themeRoutes(router);
const userThemeRouter = userThemeRoutes(router);

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(themeRouter);
app.use(userThemeRouter);
app.get('/*', getWebpackMiddlewares(process.env.NODE_ENV || 'production'));
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
// eslint-disable-next-line @typescript-eslint/no-floating-promises, @typescript-eslint/no-unsafe-call
initDB();
