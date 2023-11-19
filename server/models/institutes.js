import mongoose from "mongoose";
let institutes_schema = new mongoose.Schema({
  title:{type: String, required: true},
  link: {type: String, },
  description: {type: String, required: true},
  category: {type: String, required: true},
  email: {type: Date, },
  phone: {type: Date, required: true},
  imagePath: {type: String, },
});

const Institutes = mongoose.model('Institutes', institutes_schema);

export default Institutes