import News from '../models/news.js'

export const getNews = async (req, res) => {
  try {

    const newsData = await News.find(); // Fetch all news from the MongoDB collection
    console.log(newsData)
    res.status(200).json(newsData);

  } catch (error) {

    console.error('error2:', error)
    res.status(404).json({ message: error.message });
    
  }
} 