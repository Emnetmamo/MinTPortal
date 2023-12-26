import mongoose from "mongoose";

const projectIdea = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: true
  },
  cvPath: {
    type: String,
    required: true
  },
  teamMembers: {
    type: [String],
    required: true
  },
  projectCategory: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  proposalPath: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true
  },
  hostInstitution: {
    type: String,
    required: true
  },
  letterPath: {
    type: String,
    required: true
  },
  submittedDate: {
    type: Date,
    required: true
  },
  grantedDate: {
    type: Date,
    required: true
  },
  proposalPath2:{
    type: String,
    required: true
  },
  presentationPath:{
    type: String,
    required: true
  },
  proposalPath3:{
    type: String,
    required: true
  }
});

 const ProjectModel = mongoose.model("projectfiles", projectIdea)

 export default ProjectModel;