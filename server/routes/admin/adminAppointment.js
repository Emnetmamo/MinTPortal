import mongoose from "mongoose";
import ProjectModel from "../../models/projects.js";
import AppointmentModel from "../../models/appointments.js";
import nodemailer from "nodemailer";

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
        const {message} = req.body;
        console.log("Message: "+message);
        try{
            console.log(id1)
            await AppointmentModel.findOneAndUpdate({projectId:id1}, {status: newStatus, message: message})
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

        let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
          }
        });
        const appt = await AppointmentModel.findOne({projectId: id1});
        const email2 = appt.email;
        console.log(email2);
        const dateAppt = new Date(newAppointmentDate).toLocaleString();
        let mailOptions = {
          from: process.env.MAIL_USERNAME,
          to: email2,
          subject: 'Appointment date',
          text: 'Hello User! \n\nThe admin has set an appointment date for you to be on '+
          dateAppt.split(',')[0] + ' at ' + dateAppt.split(',')[1] + '. Please log into your account on the research '+
          'portal to confirm or reschedule this appointment.\n\nThank You! \nThe Ministry of Innovation and Technology(MinT)'
        };
        if(TimeCheck[0] === undefined)
        {
          try{
              console.log(id1)
              await AppointmentModel.findOneAndUpdate({projectId:id1}, 
                  {status: "Pending", appointmentDate: newAppointmentDate, message:""})
              .then(result=>{ 
                console.log("Set new time "+newAppointmentDate+" "+result)})
              .catch(err=> res.json(err))
          }
          catch(err){
              console.log(err);
          }
          try{
            transporter.sendMail(mailOptions, function(err, data) {
              if (err) {
                console.log("Email Error " + err);
              } else {
                console.log("Email sent successfully");
              }
            });
          }
          catch(err){

          }
      }
      else{
        res.json("Already set");
      }
      }
      
}

export default adminAppointment;