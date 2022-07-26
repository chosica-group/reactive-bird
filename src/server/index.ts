import express from 'express';
import path from 'path';
import { getWebpackMiddlewares } from './render/hmr';

const app = express();
// app.use(render());

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('*', getWebpackMiddlewares(process.env.NODE_ENV || 'development'));
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
