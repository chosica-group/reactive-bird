const express = require('express');
const db = require('./server/models');
const routes = require('./server/routes');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/dist`));
function serveIndev(req, res) {
  res.redirect('/');
}

app.use('/', routes);
app.get('*', serveIndev);
db.sequelize.sync()
  .then(() => app.listen(PORT, () => console.log(`Running on ${PORT}`)))
  .catch((err) => console.log(err));
