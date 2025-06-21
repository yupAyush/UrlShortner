const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/url');
const schema = new mongoose.Schema({
    fullurl: String,
    shorturl: String,

})

module.exports = mongoose.model("url", schema);