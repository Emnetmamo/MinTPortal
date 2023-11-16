import mongoose from "mongoose";

let appointment_schema = new mongoose.Schema({
  date:{type: Date, required: true},
  time: {type: Date, required: true},
  location: {type: String, required: true},
  content: {type: String, required: true},
  sender_email: {type: String, required: true},
  sender_password: {type: String, required: true},
  attendee_email: {type: String, required: true},
});

const Appointment = mongoose.model('Appointment', appointment_schema);

export default Appointment