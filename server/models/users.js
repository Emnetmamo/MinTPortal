const mongoose = require("mongoose");

let userschema = new mongoose.Schema({
  fName: { type: String, required: true },
  LName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  address: { type: String, required: true },
});

const UserModel = mongoose.model("users", userschema);

module.exports = UserModel;
