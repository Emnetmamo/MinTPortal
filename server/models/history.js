import mongoose from "mongoose";

let history_schema = new mongoose.Schema({
  title:{type: String, required: true},
  p_investigator: {type: String, required: true},
  author: {type: String, required: true},
  funding_source: {type: String, },
  description: {type: String, required: true},
  field_of_study: {type: String, required: true },
  date: {type: Date, required: true},
  imagePath: {type: String, },
  filePath: {type: String, },
  
});

const History = mongoose.model('History', history_schema);

export default History