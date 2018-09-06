const express = require("express");
// const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const db = require("../db/db.js");
const spotify = require('./spotify-credentials.js');

const app = express();
app.use(cors());

app.get('/api/artists', (req, res) => {
  db.getArtists((err, data) => {
    if (err) console.log(err);
    else res.send(data);
  });
});

app.use(express.static(path.join(__dirname, '../dist/')));
app.use(express.static(path.join(__dirname, '../public/')));

app.listen(3000, () => console.log('Server listening at 3000'));