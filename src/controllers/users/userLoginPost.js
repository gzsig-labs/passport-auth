const loginPost = (req, res) => {
  console.log(req.body.username);
  console.log(req.body.password);
  res.redirect('/users')
};

module.exports = {loginPost}