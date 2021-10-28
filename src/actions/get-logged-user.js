const getLoggedUserAction = (req, res) => {
  res.json(req.user);
};

module.exports = { getLoggedUserAction };
