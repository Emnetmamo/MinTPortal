import mongoose from "mongoose";

let publication_schema = new mongoose.Schema({
  title:{type: String, required: true},
  p_investigator: {type: String, required: true},
  author: {type: String, required: true},
  description: {type: String, required: true},
  field_of_study: {type: String, required: true },
  date: {type: Date, required: true},
  imagePath: {type: String, },
  filePath: {type: String, },
  
});

const Publication = mongoose.model('Publication', publication_schema);

export default Publication