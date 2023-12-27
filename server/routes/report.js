import reportsModel from "../models/reports.js";
import ProjectModel from "../models/projects.js";
import multer from "multer";
import express from "express";
import mongoose from "mongoose";
const router = express.Router();

let fileName1 = "";
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/reports")
    },
    filename: function(req, file, cb){
        fileName1 = Date.now()+"-"+file.originalname.replaceAll(" ", "_");
        console.log(file);
        cb(null, fileName1)
    }
});
const upload = multer({storage: storage, limits:{fileSize: 10000000}}); //file size limit is 10MB

router.post('/setMessage', async function(req, res){
        const message1 = req.body.message;
        const reportID = new mongoose.Types.ObjectId(req.body.reportID);
        await reportsModel.findOneAndUpdate({_id: reportID}, {$addToSet:{message: [message1]}})
        .then(result=>res.json(result))
        .catch(err=>console.log(err))
})
router.post('/find', async function(req, res){
    const email = req.body.email;
    const proj = await ProjectModel.find({email:email});
    const projID = proj[0]._id.toString();
    //console.log(projID);
        await reportsModel.find({projectID: projID})
        .then((result)=>{
            // console.log(result);
            res.json(result);})
        .catch(err=> console.log(err))
})
router.post('/upload/:id',upload.single('file') ,async function(req, res){
    const projectTitle1 = req.params.id.split('-')[0];
        const projectID1 = req.params.id.split('-')[1];
        const file = req.file;
        //console.log(req.body);
        console.log(req.file);
       
        
        const today = new Date(Date.now()).toISOString();
        const path = "reports/"+fileName1;
        await reportsModel.create({
            projectID: projectID1,
            projectTitle: projectTitle1,
            date: today,
            message: " ",
            filePath: path
        });
})
router.get('/getAll', async function(req,res){
    await reportsModel.find({})
        .then(result => res.json(result))
        .catch(err=>console.log(err))
})

export default router;