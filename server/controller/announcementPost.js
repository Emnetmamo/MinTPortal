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
        const 
    }
}

export default announcementPost;