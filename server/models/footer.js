
import mongoose from "mongoose";

let footer_Schema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String,  required: true},
  message: { type: String, required: true },
 
});

const Footer = mongoose.model("Footer", footer_Schema);

export default   Footer;