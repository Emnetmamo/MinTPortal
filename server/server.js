import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
//routes imports 
import news from './routes/news.js'
import publications from './routes/publications.js'
import adminNews from './routes/adminNews.js'
import adminPublications from './routes/adminPublications.js'

const app = express();
const CONNECTION_URL = "mongodb+srv://tklemariam:tklemariam@cluster0.9qj7xxi.mongodb.net/Mint" 
const PORT = process.env.PORT || 5001;


//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.static(path.join('./', 'public')));


// db connection
async function main() {
  try {
    await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

main();



// middleware to routes
app.use('/news', news);
app.use('/resources', publications);
app.use('/admin/news', adminNews);
app.use('/admin/publications', adminPublications)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});