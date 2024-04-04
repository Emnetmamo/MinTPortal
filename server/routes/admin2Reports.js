import UserModel from "../models/users.js";
import committeReportModel from "../models/committeeReports.js";
import multer from "multer";
import express from "express";
import mongoose from "mongoose";
const router = express.Router();

let fileName1 = "";
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/committee-reports")
    },
    filename: function(req, file, cb){
        fileName1 = Date.now()+"-"+file.originalname.replaceAll(" ", "_");
        console.log(file);
        cb(null, fileName1)
    }
});
router.get('/getAll', async function(req, res){
    await committeReportModel.find({})
        .then((result)=>{
            // console.log(result);
            res.json(result);})
        .catch(err=> console.log(err))
})
router.get('/find/:email', async function(req, res){
    console.log(req.params.email);
    await UserModel.find({email: req.params.email})
        .then((result)=>{
            console.log(result);
            res.json(result);})
        .catch(err=> console.log(err))
})

const upload = multer({storage: storage, limits:{fileSize: 10000000}}); //file size limit is 10MB

router.post('/upload/:id',upload.single('file') ,async function(req, res){
    const userID1 = req.params.id.split('-')[0];
    const projectID1 = req.params.id.split('-')[1];
    const projectTitle = req.params.id.split('-')[2];
    const file = req.file;
    //console.log(req.body);
    console.log(req.file);
    
    const path = "committee-reports/"+fileName1;
    const uploadDate1 = new Date(Date.now()).toISOString();
    await committeReportModel.create({
        userID: userID1,
        projectID: projectID1,
        projectTitle: projectTitle,
        reportPath: path,
        uploadDate: uploadDate1
    })
    .then(result => console.log(result))
    .catch(err=>console.log(err))
        
})

export default router;