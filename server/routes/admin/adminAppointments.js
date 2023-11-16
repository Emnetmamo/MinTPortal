import express from 'express'
import Appointment from '../../models/appointments.js';
import {postAppointment} from '../../controller/appointments.js'

const router = express.Router();

router.post('/add-appointment', async (req, res) => {  
   
  const newsPost = req.body;
  const newNewsPost =  new Appointment(newsPost);
    
  try {
      
   const savedNews = await newNewsPost.save();
   res.status(201).json(savedNews);        
    
  } catch (error) {
           
    res.status(409).json({ error: 'An error occurred while saving to the database' });
  }

}
);

export default router;

// server.js (or your server-side file)
// ... (other server code)

// .post('/send-appointment-email', async (req, res) => {
//   const { appointmentData } = req.body;

//   // Load the iCalendar file
//   const icsContent = generateICSContent(appointmentData);

//   // Define email options
//   const mailOptions = {
//     from: config.email.user,
//     to: appointmentData.email,
//     subject: 'Appointment Invitation',
//     text: 'Please find the appointment details attached.',
//     attachments: [
//       {
//         filename: 'appointment.ics',
//         content: icsContent,
//       },
//     ],
//   };

//   try {
//     // Send the email
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ', info.response);

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error sending email: ', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


