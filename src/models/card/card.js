const mongoose = require("mongoose");
const User = require("../user/user");

const card = new mongoose.Schema({
  name: String,
  price: Number,
  url: String,
  sold: Boolean,
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
});

module.exports = mongoose.model("card", card);
