import mongoose from "mongoose";



const projectIdea=new mongoose.Schema({
  projectTitle:{
      type:String,
      required:true
  },
//   cvPath:{
//       type:String,
//       required:true
//   },
  teamMembers:{
      type:String,
      required:true
  },
  projectCategory:{
      type:String,
      required:true
  },
  description:{
      type:String,
      required:true
  }
//   proposalPath:{
//       type:String,
//       required:true
//   },

})

const ProjectModel=mongoose.model('projectfiles',projectIdea)




export default   ProjectModel;