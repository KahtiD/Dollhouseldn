//Connecting to main express.js
const routes = require('express').Router();
const hello = require('./wordpressapi/hello');
const goodbye = require('./woocommerceapi/goodbye');
const bookings = require('./woocommerceapi/index');

//Connecting to all in apis file routes
routes.use(hello);
routes.use(goodbye);
routes.use(bookings);

//Exporting to server.js
module.exports = routes;
