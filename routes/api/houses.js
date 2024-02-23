const express = require("express");
const router = express.Router();

//Load Model
const House = require("../../models/House");

//get all books
//@ GET api/house
router.get("/", (req, res) => {
  House.find()
    .then((house) => res.json(house))
    .catch((error) =>
      res.status(404).json({ nohousefound: "No single house found" })
    );
});

//get single book
//@GET api/house/:id
router.get("/:id", (req, res) => {
  House.findById(req.params.id)
    .then((house) => res.json(house))
    .catch((error) => res.status(404).json({ err: "No such house found" }));
});

//create a single book
//@POST api/house/
router.post("/", (req, res) => {
  House.create(req.body)
    .then((house) => res.json({ mess: "House created successfully" }))
    .catch((error) => res.status(404).json({ err: "House not created" }));
});

//update a single book
//@PUT api/house/id
router.put("/:id", (req, res) => {
  House.findByIdAndUpdate(req.params.id, req.body)
    .then((house) => res.json({ mess: "House updated successfully" }))
    .catch((error) => res.status(404).json({ err: "Failed to be updated" }));
});

//delete a single book
//@DELETE api/house/id
router.delete("/:id", (req, res) => {
  House.findByIdAndDelete(req.params.id)
    .then((house) => res.json({ mess: "House deleted successfully" }))
    .catch((error) => res.status(404).json({ err: "Failed to be deleted" }));
});

module.exports = router;
