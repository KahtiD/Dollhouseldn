//All our dependecies
const express = require('express');
const routes = require('./apis');

const app = express();
const port = process.env.PORT || 3001;

//Connect routes to our web app
app.use('/', routes);


//Turning on the server!
app.listen(port, () => console.log(`Listening on port ${port}, we hear you!`));
