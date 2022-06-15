const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/dist`));
function serveIndev(req, res) {
  res.redirect('/');
}

app.get('*', serveIndev);
app.listen(PORT, () => { // хероку тут берет свой PORT из своего env
  console.log(`Running on ${PORT}`);
});
