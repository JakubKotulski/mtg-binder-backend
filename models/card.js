const mongoose = require("mongoose");
const card = new mongoose.Schema({
  name: String,
  price: Number,
  url: String,
});

module.exports = mongoose.model("card", card);
