import announcementModel from "../models/announcements.js";

function announcementPost(req, res){
    if(req.params.page === "addCall")
    {
        const {title,
            description,
            field,
            callType,
            startDate,
            endDate,
            prizes,
            instructions,
            guideline} = req.body;
        try{
            console.log("Posting")
            announcementModel.create({title, description, field, callType, startDate, endDate, prizes, instructions, guideline})
            .then(result=> res.json(result))
            .catch(err=> res.json(err))
        }
        catch(err){
            console.log(err);
        }
    }
    else if(req.params.page === "fetchCalls"){
        const nowDate = Date.now();
        const today = (new Date(nowDate)).toISOString();
        console.log(today);
        //the previous line returns the current date in yyyy-mm-dd format, this is the format of Dates in mongodb
        const results = announcementModel.find({endDate: {$gt: today}})
        // .then(results=>console.log(results))
        .then(result=>res.json(result))
        .catch(err => console.log(err));
    }
}

export default announcementPost;