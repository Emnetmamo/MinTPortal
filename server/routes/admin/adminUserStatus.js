import ProjectModel from "../../models/projects.js";

const adminUserStatus=async (req, res)=>{
    if(req.params.id !== "getAll")
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
            .then(result=>{ 
               console.log(result)
                res.json(result)})
            .catch(err=> res.json(err))
        }
        catch(err){
            console.log(err);
        }
    } 
    
    else if (req.params.id === "getAll") {
      await  ProjectModel
          .find({ })
          .then((result) => {
            //console.log(result)
            res.json(result);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while fetching data.' });
          });
      }
      
}

export default adminUserStatus;