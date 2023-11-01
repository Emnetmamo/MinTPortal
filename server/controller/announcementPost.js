import announcementModel from "../models/announcements";

function announcementPost(req, res){
    const {title,
        description,
        field,
        startDate,
        endDate,
        prizes,
        instructions,
        guideline} = req.body;
}