import mongoose from "mongoose";

const projectFeedbackSchema = new mongoose.Schema({
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
    feedback:{
        type: [String],
        required: true
    }
});

const projectFeedbackModel = mongoose.model("projectfeedbacks", projectFeedbackSchema);

export default projectFeedbackModel;