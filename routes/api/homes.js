const express = require("express");
const router = express.Router();

//Load Model
const Home = require("../../models/Home");

//get all books
//@ GET api/house
router.get("/", (req, res) => {
  Home.find()
    .then((home) => res.json(home))
    .catch((error) =>
      res.status(404).json({ nohomefound: "No single home found" })
    );
});

//get single book
//@GET api/home/:id
router.get("/:id", (req, res) => {
  Home.findById(req.params.id)
    .then((home) => res.json(home))
    .catch((error) => res.status(404).json({ err: "No such home found" }));
});

//create a single book
//@POST api/home/
router.post("/", (req, res) => {
  Home.create(req.body)
    .then((home) => res.json({ mess: "home created successfully" }))
    .catch((error) => res.status(404).json({ err: "home not created" }));
});

//update a single book
//@PUT api/home/id
router.put("/:id", (req, res) => {
  Home.findByIdAndUpdate(req.params.id, req.body)
    .then((home) => res.json({ mess: "home updated successfully" }))
    .catch((error) => res.status(404).json({ err: "Failed to be updated" }));
});

//delete a single book
//@DELETE api/home/id
router.delete("/:id", (req, res) => {
  Home.findByIdAndDelete(req.params.id)
    .then((home) => res.json({ mess: "home deleted successfully" }))
    .catch((error) => res.status(404).json({ err: "Failed to be deleted" }));
});

module.exports = router;
