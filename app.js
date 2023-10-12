require('@babel/register');
require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();

const indexRouter = require('./routes/index.routes');

serverConfig(app);

app.use('/', indexRouter);

app.get('/cookie', (req, res) => {
  res.cookie('test', 42, { httpOnly: true });
  console.log(req.cookies);
  res.end();
});

app.get('/session', (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.json(req.session);
});

app.get('/version', (req, res) => {
  res.json({ version: process.version });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Наша шарманка играет на ${PORT} порту`);
});
