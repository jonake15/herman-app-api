const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: "String",
    reuired: true,
  },
  email: {
    type: "String",
    reuired: true,
  },
  password: {
    type: "String",
    reuired: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
