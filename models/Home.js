const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
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

module.exports = Home = mongoose.model("home", HomeSchema);
