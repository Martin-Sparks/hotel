const express = require('express');
const app = express();
const createRouter = require('./helpers/create_router.js');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require("cors");


app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('bookings');
    const bookingsCollection = db.collection('bookings');
    const bookingsRouter = createRouter(bookingsCollection);
    app.use('/api/bookings', bookingsRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log("App running on port 3000");
});
