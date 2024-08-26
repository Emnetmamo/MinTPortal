import announcementModel from "../models/announcements.js";

const announcementPost=async (req, res)=>{
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

        console.log({title,
            description,
            field,
            callType,
            startDate,
            endDate,
            prizes,
            instructions,
            guideline});
        try{
            console.log("Posting")
            announcementModel.create({title, description, field, callType, startDate, endDate, prizes, instructions, guideline})
            .then(result=>{ 
               console.log(result)
                res.json(result)})
            .catch(err=> {
                console.log(err)
                res.json(err);})
        }
        catch(err){
            console.log(err);
        }
    } 
    
    else if (req.params.page === "fetchCalls") {
        const nowDate = new Date();
        const twentyFourHoursAgo = new Date(nowDate - 24 * 60 * 60 * 1000);
      
      await  announcementModel
          .find({  })
          .then((result) => {
            console.log(result)
            res.json(result);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while fetching data.' });
          });
      }
      
}

export default announcementPost;