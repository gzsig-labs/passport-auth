const login = (req, res) => {
  res.render('users/login', { "message": req.flash("error") })
}

module.exports = {login}