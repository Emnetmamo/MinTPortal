import mongoose from "mongoose";

const committeeReportSchema = new mongoose.Schema({
    userID:{
        type: String,
        required: true
    },
    projectID:{
        type: String,
        required: true
    },
    projectTitle:{
        type: String,
        required: true
    },
    reportPath:{
        type: String,
        required: true
    },
    uploadDate:{
        type: Date,
        required: true
    }
});

const committeReportModel = mongoose.model("committeereports", committeeReportSchema);

export default committeReportModel;