const WooCommerceAPI = require('woocommerce-api');
const client= require('express').Router();

const WooCommerce = new WooCommerceAPI({
  url: 'http://localhost:8888/',
  consumerKey: WOO_CONSUMER_KEY,
  consumerSecret: WOO_CONSUMER_SECRET,
  wpAPI: true,
  version: 'wc/v3'
});

let response;
  WooCommerce.get('products', (err, data, res) => {
    response = res;
    client.get('/bookings', (req, res, err) => {
      if (res.status(200)) {
      console.log('bookings retrieved');
      res.status(200).json(JSON.parse(response));
    } else {
      console.log('theres an error getting bookings', err);
    }
  })
});


module.exports = client;
