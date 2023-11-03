import mongoose from "mongoose";

let userschema = new mongoose.Schema({
  fName: { type: String, required: true },
  LName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  address: { type: String, required: true },
  uniqueID:{type: String, required: true},
  role:{
    type:String,
    default:'user'
  }
});

const projectIdea=new mongoose.Schema({
  projectTitle:{
      type:String,
      required:true
  },
  cvPath:{
      type:String,
      required:true
  },
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
  },
  proposalPath:{
      type:String,
      required:true
  },

})
const UserModel = mongoose.model("users", userschema);
const ProjectModel=mongoose.model('projectIdeas',projectIdea)




export default   {UserModel,ProjectModel};