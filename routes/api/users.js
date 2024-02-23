const express = require("express");
const router = express.Router();
const session = require("express-session");
//Schema
const User = require("../../models/Users");

//get single user-session
//path @ /api/users/:id
router.get("/", (req, res) => {
  if (req.session.username) {
    return res.json({ valid: true, username: req.session.username });
  } else {
    return res.json({ valid: false });
  }
});

//get all users
//path @ /api/users
router.get("/", (req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ err: "No users in the database" }));
});

//get single user
//path @ /api/users/:id
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) =>
      res.status(404).json({ err: "No single user in the database" })
    );
});

//create single user
//path @ /api/users/register
router.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ err: "No  user created" }));
});

//login a user
//path @ /api/users/login
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username }).then((user) => {
    if (user) {
      if (user.password === password) {
        req.session.username = user.username;

        res.json({ Login: true });
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

//update a user
//path @ /api/users/:id
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ err: "No  user updated" }));
});

//delete a user
//path @ /api/users/:id
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ err: "No  user created" }));
});

module.exports = router;
