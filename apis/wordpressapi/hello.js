const routes = require('express').Router();


routes.get('/hello', (req, res) => {
  res.send('Hello From the hello.js file');
});


module.exports = routes;
