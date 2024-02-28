import UserModel from "../models/users.js";
import express from 'express'

const getName = express.Router();

getName.post('/', async function(req,res){
    let result1 = null;
    console.log(req.body.email);
    await UserModel.find({email: req.body.email})
    .then(result => {console.log(result); result1 = result;})
    .catch(err => console.log(err))

    const Name = result1[0].fName + " " + result1[0].LName; 
    console.log(Name);
    res.json({name: Name});
});

export default getName;