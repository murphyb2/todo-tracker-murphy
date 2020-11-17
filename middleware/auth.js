module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status(401).json({
        message: "Please login",
      });
    }
  },
  ensureGuest: function (req, res, next) {
    if (req.isAuthenticated()) {
      res.status(401).json({
        message: "Please login",
      });
    } else {
      return next();
    }
  },
};
