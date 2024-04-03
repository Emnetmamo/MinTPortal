import express from "express";
import History from '../models/history.js'
const histroyRoute=express.Router()
histroyRoute.post('/homehistory', async (req, res) => {
    try {
      console.log(req.body);
      const id = req.body.id;
      const data = await History.findOne({ _id: id }); 
      if(data){
      console.log(data);
      res.json({data:data});
    }
    else{
        res.json('some server error please try agian later')
    }
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ message: 'Internal server error' }); // Send an error response
    }
  });
export  default histroyRoute