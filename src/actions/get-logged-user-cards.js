const Card = require("../models/card/card");

const getLoggedUserCardsAction = async (req, res) => {
  const id = req.user._id;
  try {
    const cards = await Card.find({ userID: id });
    res.json(cards);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getLoggedUserCardsAction };
