import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
    title: String,
    description: String,
    field: String,
    startDate: Date,
    endDate: Date,
    prizes: String,
    instructions: String,
    guideline: String
});

const announcementModel = mongoose.model("announcements", announcementSchema);

export default announcementModel;