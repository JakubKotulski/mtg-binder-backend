const getLoggedUserAction = (req, res) => {
  res.send(req.user);
};

module.exports = { getLoggedUserAction };
