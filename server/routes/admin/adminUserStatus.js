import mongoose from "mongoose";
import ProjectModel from "../../models/projects.js";
import AppointmentModel from "../../models/appointments.js";

const adminUserStatus=async (req, res)=>{
  if (req.params.id === "getAll") {
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
    else if(req.params.id.split('-')[0] === "fetch"){
      const email1 = req.params.id.split('-')[1];
      await  ProjectModel
          .find({email:email1})
          .then((result) => {
            //console.log(result)
            res.json(result);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while fetching data.' });
          });
    }
    else if(req.params.id.split('-')[0] !== "fetch")
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
        if(newStatus > 2){
          let currentProject;
          try{
          currentProject = await ProjectModel.find({_id:id1})
          }
          catch(err){
            console.log(err);
          }

          console.log("Current: "+currentProject);
          const today = Date.now();
          const nowDate = (new Date(today)).toISOString();
          AppointmentModel.create({
            projectId:currentProject[0]._id,
            projectTitle:currentProject[0].projectTitle,
            appointmentDate:nowDate,
            email:currentProject[0].email,
            status:"Pending",
            message:" "
          })
        }
        else if(newStatus < 3){
          const today = Date.now();
          const nowDate = (new Date(today)).toISOString();
          await AppointmentModel.deleteMany({projectId:id1});
        }
    } 
    
      
}

export default adminUserStatus;