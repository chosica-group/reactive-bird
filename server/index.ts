const express = require('express');
// import render from "./render";

const app = express();
app.use(render)

const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/dist`));
function serveIndev(req, res) {
  res.redirect('/');
}

app.get('*', serveIndev);
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
