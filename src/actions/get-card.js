const Card = require("../models/card/card");

const getCardAction = async (req, res) => {
  try {
    const data = await Card.findOne({ _id: req.params.id });
    await res.json(data);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getCardAction };
