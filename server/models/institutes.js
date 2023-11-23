import mongoose from "mongoose";
let institutes_schema = new mongoose.Schema({
  title:{type: String, required: true},
  link: {type: String, required: true},
  description: {type: String, required: true},
  category: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  imagePath: {type: String, },
});

const Institutes = mongoose.model('Institutes', institutes_schema);

export default Institutes