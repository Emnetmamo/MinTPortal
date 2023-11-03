<<<<<<< Updated upstream
import mongoose from 'mongoose'
let news_schema = new mongoose.Schema({
    title:{type: String, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true},
    category: {type: String, required: true},
    date: {type: String, required: true},
  });
  
  const News = mongoose.model('news', news_schema);
  export default News
=======
import mongoose from "mongoose";
let news_schema = new mongoose.Schema({
  title:{type: String, required: true},
  author: {type: String, required: true},
  content: {type: String, required: true},
  category: {type: String, required: true},
  date: {type: Date, required: true},
  imagePath: {type: String, },
});

const News = mongoose.model('News', news_schema);

export default News
>>>>>>> Stashed changes
