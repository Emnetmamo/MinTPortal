import mongoose from "mongoose";
import ProjectModel from "../../models/projects.js";
import AppointmentModel from "../../models/appointments.js";

const adminAppointment=async (req, res)=>{
    if(req.params.id === "getAll"){
        await  AppointmentModel
          .find({})
          .then((result) => {
            //console.log(result);
            res.json(result);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while fetching data.' });
          });
    }
    if(req.params.id.split('-')[0] === "setStatus")
    {
        const id1 = req.params.id.split('-')[1];
        const newStatus = req.params.id.split('-')[2];
        try{
            console.log(id1)
            await AppointmentModel.findOneAndUpdate({projectId:id1}, {status: newStatus})
            .then(result=>{ 
               console.log(result)})
            .catch(err=> res.json(err))
        }
        catch(err){
            console.log(err);
        }
    } 
    else if(req.params.id.split('-')[0] === "load"){
        const email = req.params.id.split('-')[1]
        await  AppointmentModel
          .find({email:email})
          .then((result) => {
            //console.log(result);
            res.json(result);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while fetching data.' });
          });
    }
    else if (req.params.id.split('_')[0] === "setAppointment") {
        const id1 = req.params.id.split('_')[1];
        const newAppointmentDate = req.params.id.split('_')[2];
        const TimeCheck = await AppointmentModel.find({appointmentDate: newAppointmentDate});
        console.log(TimeCheck[0]); 
        if(TimeCheck[0] === undefined)
        {
          try{
              console.log(id1)
              await AppointmentModel.findOneAndUpdate({projectId:id1}, 
                  {status: "Pending", appointmentDate: newAppointmentDate})
              .then(result=>{ 
                console.log("Set new time "+newAppointmentDate+" "+result)})
              .catch(err=> res.json(err))
          }
          catch(err){
              console.log(err);
          }
      }
      else{
        res.json("Already set");
      }
      }
      
}

export default adminAppointment;