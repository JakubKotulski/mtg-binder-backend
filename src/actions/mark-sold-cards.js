const Card = require("../models/card/card");

const markSoldCardsAction = async (req, res) => {
  try {
    await Card.updateOne({ _id: req.params.id, userID: req.user._id }, { $set: { sold: true } });
    res.status(200);
  } catch (e) {
    console.log("ERR", e);
  }
};

module.exports = { markSoldCardsAction };
