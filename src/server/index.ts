import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express, { Router } from 'express';
import path from 'path';
import { initDB } from './models';
import { getWebpackMiddlewares } from './render/hmr';
import { themeRoutes } from './router/theme-routes';
import { userThemeRoutes } from './router/user-theme-routes';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
const cors = require('cors');

const app = express();
const router: Router = Router();
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  cors({
    origin: 'http://localhost:3000', // поставить хероку при выкладке
    credentials: true,
  }),
);

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cookieParser());

const PORT = process.env.PORT || 3000;
const themeRouter = themeRoutes(router);
const userThemeRouter = userThemeRoutes(router);

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.use(themeRouter);
app.use(userThemeRouter);

app.get('/*', getWebpackMiddlewares(process.env.NODE_ENV || 'production'));

initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Running on ${PORT}`);
    });
  })
  .catch((err) => console.log(err, 'initDb error'));
