import express from'express'
const adminRoute=express.Router()
import {addNews,getNews} from'../controller/adminControl'
adminRoute.post('/admin/news/add-news',addNews)
adminRoute.get('/news',getNews)


export default adminRoute