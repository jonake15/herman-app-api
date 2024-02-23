const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
});

module.exports = House = mongoose.model("house", HouseSchema);
