const express = require("express");
const router = express.Router();
const passport = require("passport");

const Todo = require("../models/Todo");
const TodoList = require("../models/TodoList");

/* Auth status */
// @desc Auth status of session
// @route GET /auth/status
router.get("/status", async (req, res) => {
  let todos = [];
  let todoLists = [];
  const authenticated = req.isAuthenticated();

  if (authenticated) {
    // Get the todos for this user
    try {
      todos = await Todo.find({
        owner: req.user.id,
      });
      todoLists = await TodoList.find({
        owner: req.user.id,
      });
    } catch (err) {
      console.log(err);
      todos = [];
      todoLists: [];
    }
  }
  res.status(200).json({
    authenticated,
    todos,
    todoLists,
    user: authenticated ? req.user : {},
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
