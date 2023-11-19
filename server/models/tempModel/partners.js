import mongoose from "mongoose";

let partners_schema = new mongoose.Schema({
  title:{type: String, required: true},
  link: {type: String, required: true},
  description: {type: String, required: true},
  email: {type: String, required: true },
  phone: {type: Date, required: true},
  imagePath: {type: String, },
  
});

const partners = mongoose.model('partners', partners_schema);

export default partners