import express from 'express';
// @ts-ignore
import { render } from './render/render';

const app = express();
app.use(render);

const PORT = process.env.PORT || 3000;

// app.use(express.static(`${__dirname}/dist`));
// function serveIndev(req, res) {
//   res.redirect('/');
// }

// app.get('*', serveIndev);
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
