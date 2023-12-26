import reportsModel from "../models/reports.js";
import ProjectModel from "../models/projects.js";
import multer from "multer";
import express from "express";
import mongoose from "mongoose";
const router = express.Router();

let fileName1 = "";
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/uploads")
    },
    filename: function(req, file, cb){
        fileName1 = Date.now()+"-"+file.originalname.replaceAll(" ", "_");
        console.log(file);
        cb(null, fileName1)
    }
});
const upload = multer({storage: storage, limits:{fileSize: 10000000}}); //file size limit is 10MB

router.post('/upload/:id',upload.single('file') ,async function(req, res){
    const projectStatus = req.params.id.split('-')[0];
        const projectID1 = req.params.id.split('-')[1];
        const file = req.file;
        //console.log(req.body);
        console.log(req.file);
        const ID = new mongoose.Types.ObjectId(projectID1);
        const today = new Date(Date.now()).toISOString();
        const path = "uploads/"+fileName1;

        if(projectStatus === "2"){
            await ProjectModel.findByIdAndUpdate({_id:ID}, {proposalPath2:path})
            .then(result=>console.log(result))
            .catch(err=>console.log(err))
        }
        if(projectStatus === "3"){
            await ProjectModel.findByIdAndUpdate({_id:ID}, {presentationPath:path})
            .then(result=>console.log(result))
            .catch(err=>console.log(err))
        }
        if(projectStatus === "4"){
            await ProjectModel.findByIdAndUpdate({_id:ID}, {proposalPath3:path})
            .then(result=>console.log(result))
            .catch(err=>console.log(err))
        }
});

export default router;