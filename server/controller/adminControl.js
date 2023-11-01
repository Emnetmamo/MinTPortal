import News from '../models/news.js'
const addNews=async(req,res)=>{
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
}
const getNews=async(req,res)=>{
    try {
        const news = await find(); // Fetch all news from the MongoDB collection
        res.json(news);
      } catch (error) {
        console.log('error')
        res.status(500).json({ error: 'Server error' });
      }
    }
    export default {addNews,getNews};