import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    projectID: {type:String, required:true},
    projectTitle: {type:String, required:true},
    date: {type:Date, required:true},
    message: {type:[String], required:true},
    filePath: {type:String, required:true}
});

const reportsModel = new mongoose.model('reports', reportSchema);

export default reportsModel;