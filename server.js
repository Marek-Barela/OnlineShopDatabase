const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const PORT = process.env.PORT || 5000;

const maleProducts = require('./routes/api/male-products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("MongoDB error", err));

app.use('/api/male/products', maleProducts);

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`ready at http://localhost:${PORT}`)
})