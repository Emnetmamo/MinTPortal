import mongoose from "mongoose";

let rddocument_schema = new mongoose.Schema({
  title:{type: String, required: true},
  description: {type: String, required: true},
  category: {type: String, required: true },
  date: {type: Date, required: true},
  imagePath: {type: String, },
  filePath: {type: String, },
  
});

const RDDocuments = mongoose.model('RDDocuments', rddocument_schema);

export default RDDocuments;