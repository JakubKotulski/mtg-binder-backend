const logout = async (req, res) => {
  req.logout();
  res.json({});
};

module.exports = { logout };
