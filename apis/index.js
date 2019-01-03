//Connecting to main express.js
const routes = require('express').Router();
const hello = require('./wordpressapi/hello');
const goodbye = require('./woocommerceapi/goodbye');

//Connecting to all in apis file routes
routes.use(hello);
routes.use(goodbye);

//Exporting to server.js
module.exports = routes;
