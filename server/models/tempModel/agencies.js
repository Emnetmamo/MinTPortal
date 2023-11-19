import mongoose from "mongoose";

let agencies_schema = new mongoose.Schema({
  title:{type: String, required: true},
  link: {type: String, required: true},
  description: {type: String, required: true},
  email: {type: String, required: true },
  phone: {type: Date, required: true},
  imagePath: {type: String, },
 
  
});

const agencies = mongoose.model('agencies', agencies_schema);

export default agencies