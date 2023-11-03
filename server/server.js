// server.js or index.js (your main server file)
import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import News from './models/news.js'
const app = express();
const CONNECTION_URL = "mongodb+srv://tklemariam:tklemariam@cluster0.9qj7xxi.mongodb.net/Mint" 
const PORT = process.env.PORT || 5001;


//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0.wanlbx7.mongodb.net/mintportal?retryWrites=true&w=majority" 
const PORT = process.env.PORT || 5000;
async function main() {
  try {
    await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

main();



  app.post('/admin/news/add-news', async (req, res) => {
    try {
    const { title, author, content, category, date } = req.body;

    const newNews = new News({
      title,
      author,
      content,
      category,
      date,
    });
 
    const savedNews = await newNews.save();
    res.json(savedNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


  app.get('/news', async (req, res) => {
    try {
      const news = await News.find(); // Fetch all news from the MongoDB collection
      res.json(news);
    } catch (error) {
      console.log('error')
      res.status(500).json({ error: 'Server error' });
    }
  });



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
