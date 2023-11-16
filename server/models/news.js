import mongoose from "mongoose";
let news_schema = new mongoose.Schema({
  title:{type: String, required: true},
  author: {type: String, required: true},
  content: {type: String, required: true},
  category: {type: String, required: true},
  date: {type: Date, required: true},
  image: {type: String, },
  tags: [String],
  likeCount: {type: Number, default: 0},
  
});

const News = mongoose.model('News', news_schema);

export default News