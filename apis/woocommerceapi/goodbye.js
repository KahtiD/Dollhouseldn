const goodbye = require('express').Router();


goodbye.get('/goodbye', (req, res) => {
  res.send('Goodbye from the goodbye.js file');
});


module.exports = goodbye;
