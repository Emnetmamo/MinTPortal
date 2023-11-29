import mongoose from "mongoose";
let Collaboration_schema = new mongoose.Schema({
  title:{type: String, required: true},
  link: {type: String, required: true},
  description: {type: String, required: true},
  imagePath: {type: String, },
});

const Collaboration = mongoose.model('Collaboration', Collaboration_schema);

export default Collaboration