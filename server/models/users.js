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


const UserModel = mongoose.model("users", userschema);





export default   UserModel;