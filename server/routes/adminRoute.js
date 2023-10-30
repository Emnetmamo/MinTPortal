const express=require('express')
const adminRoute=express.Router()
const {addNews,getNews}=require('../controller/adminControl')
adminRoute.post('/admin/news/add-news',addNews)
adminRoute.get('/news',getNews)
module.exports=adminRoute