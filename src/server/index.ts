import express from 'express';
import path from 'path';
// @ts-ignore
import { render } from './render/render';

const app = express();
// app.use(render());

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../../public')));
// function serveIndev(req, res) {
//   res.redirect('/');
// }

app.get('*', render);
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
