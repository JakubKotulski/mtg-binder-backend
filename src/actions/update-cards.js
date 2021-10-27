const Card = require("../models/card/card");

const updateCardsAction = async (req, res) => {
  console.log(req.body);
  try {
    const name = req.body.name;
    const price = req.body.price;
    const url = req.body.url;

    await Card.updateOne({ _id: req.params.id }, { $set: { name: name, price: price, url: url } });
    res.status(200);
  } catch (e) {
    console.log("ERR", e);
  }
};

module.exports = { updateCardsAction };
