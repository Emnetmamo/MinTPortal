
import mongoose from "mongoose";

let footer_Schema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String},
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Footer = mongoose.model("Footer", footer_Schema);

export default   Footer;