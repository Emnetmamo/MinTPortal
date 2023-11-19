import mongoose from "mongoose";

let researchs_schema = new mongoose.Schema({
  title:{type: String, required: true},
  link: {type: String, },
  description: {type: String, required: true},
  email: {type: String, required: true },
  phone: {type: Date, required: true},
  imagePath: {type: String, },
  
});

const researchs = mongoose.model('researchs', researchs_schema);

export default researchs