module.exports = function (req, res, next) {
  if (req.isAuthenticated()) return next();
  req.flash('success_msg', 'Pls Login to continue');
  res.redirect('/');
};
//# sourceMappingURL=auth.js.map