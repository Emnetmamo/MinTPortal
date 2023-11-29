import mongoose from "mongoose";



const appointmentSchema=new mongoose.Schema({
  projectId:{
      type:String,
      required:true
  },
  projectTitle:{
      type:String,
      required:true
  },
  appointmentDate:{
      type:Date,
      required:true
  },
  email:{
      type:String,
      required:true
  },
  status:{
      type:String,
      required:true
  }
});

const AppointmentModel=mongoose.model('appointments',appointmentSchema);




export default AppointmentModel;
