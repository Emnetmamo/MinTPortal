import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
    title: {type:String,required:true},
    description: {type:String,required:true},
    field: {type:String,required:true},
    callType:{type:String,required:true},
    startDate: {type:Date,required:true},
    endDate:{type:Date,required:true},
    prizes: {type:String,required:true},
    instructions:{type:String,required:true},
    guideline: {type:String,required:true}
});

const announcementModel = mongoose.model("announcements", announcementSchema);

export default announcementModel;