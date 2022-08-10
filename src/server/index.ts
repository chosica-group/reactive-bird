import express from 'express';
import path from 'path';
import { getWebpackMiddlewares } from './render/hmr';
import routes from './routes'
import sequelize from 'server/models';
import bodyParser from 'body-parser';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
app.get('*', getWebpackMiddlewares(process.env.NODE_ENV || 'production'));

sequelize.sync()
  .then(() => app.listen(PORT, () => console.log(`Running on ${PORT}`)))
