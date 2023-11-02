import announcementModel from "../models/announcements";

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
            announcementModel.create({title, description, field, callType, startDate, endDate, prizes, instructions, guideline});
        }
        catch(err){
            console.log(err);
        }
    }
    else if(req.params.page === "fetchCalls"){
        const nowDate = Date.now();
        const today = (new Date(today)).toISOString().split('T')[0];
        //the previous line returns the current date in yyyy-mm-dd format, this is the format of Dates in mongodb
        const results = announcementModel.find({endDate: {$gt: today}})
        .then(result => res.json(result))
        .catch(err => console.log(err));
    }
}

export default announcementPost;