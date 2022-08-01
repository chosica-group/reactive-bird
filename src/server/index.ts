import express from 'express';
import path from 'path';
import { initDB } from './models';
import { getWebpackMiddlewares } from './render/hmr';
import { themeRoutes } from './router/theme-routes';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/theme', themeRoutes);
app.get('*', getWebpackMiddlewares(process.env.NODE_ENV || 'production'));
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

// eslint-disable-next-line @typescript-eslint/no-floating-promises
initDB();
