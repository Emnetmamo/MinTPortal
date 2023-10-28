// server.js or index.js (your main server file)
import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();

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

const news = mongoose.model('news', new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  category: String,
  date: Date,
}));


app.post('/admin/news/add-news', async (req, res) => {
  try {
    const { title, author, content, category, date } = req.body;

    const newNews = new news({
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


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
