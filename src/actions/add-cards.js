const Card = require("../models/card/card");

const addCard = async (req, res) => {
  try {
    const name = req.body.name;
    const url = req.body.url;
    const price = req.body.price;

    const objectToInsert = new Card({
      name: name,
      price: price,
      url: url,
      sold: false,
      userID: req.user._id,
    });

    await objectToInsert.save();
    res.json(objectToInsert);
  } catch (e) {
    console.log("ERR", e);
  }
};

module.exports = { addCard };
