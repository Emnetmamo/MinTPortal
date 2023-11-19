import mongoose from "mongoose";

let laboratories_schema = new mongoose.Schema({
  title:{type: String, required: true},
  link: {type: String, required: true},
  description: {type: String, required: true},
  email: {type: String, required: true },
  phone: {type: Date, required: true},
  imagePath: {type: String, },
  filePath: {type: String, },
  
});

const laboratories = mongoose.model('laboratories', laboratories_schema);

export default laboratories