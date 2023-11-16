import express from "express";
import {getNews} from '../controller/news.js'

const router = express.Router()
router.get('/', getNews);


export default router;