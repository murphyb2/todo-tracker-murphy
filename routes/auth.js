const express = require("express");
const router = express.Router();

const passport = require("passport");

/* Auth status */
// @desc Auth status of session
// @route GET /auth/status
router.get("/status", (req, res) => {
  res.status(200).json({
    authenticated: req.isAuthenticated(),
  });
});

/* Login */
// @desc Auth with Google
// @route GET /auth/google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

// @desc Google auth callback
// @route GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

/* Logout */
// @desc Google auth callback
// @route GET /auth/logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
