
const mongoose=require("mongoose");

let news_schema = new mongoose.Schema({
  title:{type: String, required: true},
  author: {type: String, required: true},
  content: {type: String, required: true},
  category: {type: String, required: true},
  date: {type: String, required: true},
});

const News = mongoose.model('News', news_schema);

module.exports= News