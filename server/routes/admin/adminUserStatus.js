import mongoose from "mongoose";
import ProjectModel from "../../models/projects.js";

const adminUserStatus=async (req, res)=>{
    if(req.params.id !== "getAll")
    {
        const id1 = new mongoose.Types.ObjectId(req.params.id.split('-')[0]);
        const newStatus = parseInt(req.params.id.split('-')[1]);
        try{
            console.log(id1)
            await ProjectModel.findOneAndUpdate({_id:id1}, {status: newStatus})
            .then(result=>{ 
               console.log(result)})
            .catch(err=> res.json(err))
        }
        catch(err){
            console.log(err);
        }
    } 
    
    else if (req.params.id === "getAll") {
      await  ProjectModel
          .find({status:{$gt:-1}})
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