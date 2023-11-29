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
  },
  message:{
    type:String,
    required:true
}
});

const Appointment1 = mongoose.model('Appointment1', appointment_schema);

export default Appointment1