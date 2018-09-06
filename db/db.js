const mongoose = require('mongoose');
const data = require('./artistData.json');

mongoose.connect('mongodb://localhost/rocksongs');

const artistSchema = mongoose.Schema({
    name: String,
    years: String,
    members: String,
    songs: Array,
    top: String,
    left: String,
    width: String,
    height: String,
    nameTop: String,
    nameLeft: String,
    nameFontSize: String,
    influenced: Array,
    influencedBy: Array,
    photo: String,
});
  
const Artist = mongoose.model('Artist', artistSchema);

Artist.collection.drop();

Artist.collection.insertMany(data, (err, results) => {
  if (err) console.log(err);
  else console.log('Artists entered into database');
});

const getArtists = (callback) => {
  Artist.find((err, data) => {
    if (err) callback(err, null);
    else callback(null, data);
  })
}
module.exports = {
  getArtists,
}

