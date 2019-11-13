const list = (req, res) => {
  res.render('users/list', {user: req.user})
};

module.exports = {list};