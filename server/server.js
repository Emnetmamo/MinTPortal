// server.js or index.js (your main server file)
const express=require('express')
const mongoose=require('mongoose');
const bodyParser =require('body-parser');
const cors =require('cors')
const News =require('./models/news.js')
const UserModel=require('./models/users.js')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const url=''
 const CONNECTION_URL = "mongodb+srv://adaneeshete:adaneeshete@cluster0.9qj7xxi.mongodb.net/" 
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL)
.then(()=>{console.log('mongdb is conncted')})
.catch(error=>{console.log('error occure  during connection'+error)})
  
app.post('/admin/t news/add-news', async (req, res) => {
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

app.get('/new',async(req,res)=>{
  await UserModel.create(req.body)
  .then(user=>{res.json(user)})
  .catch(error=>{res.json(error)})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


