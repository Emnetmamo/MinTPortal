import nodemailer from 'nodemailer'
import Appointment from '../models/announcements.js';



// POST add-appointment
export const postAppointment = async (req, res) => {  
   
      const newsPost = req.body;
      const newNewsPost =  new Appointment(newsPost);
        
      try {
          
       const savedNews = await newNewsPost.save();
       res.status(201).json(savedNews);        
        
      } catch (error) {
               
        res.status(409).json({ error: 'An error occurred while saving to the database' });
      }
    
    }


// export const postAppointment = async (req, res) => {
//   const {appointmentData} = req.body;
//   console.log(appointmentData)

//   const newAppointmentPost =  new Appointment(appointmentData);
        
//   try {
      
//     const savedAppointment = await newAppointmentPost.save();
//     res.status(201).json( savedAppointment);  
    
//   } catch (error) {
               
//     res.status(409).json({ error: 'An error occurred while saving to the database' });
//   }
    


//   // Load the iCalendar file
//     const icsContent = generateICSContent(appointmentData);

//   // Create a transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: appointmentData.sender_email,
//         pass: appointmentData.sender_password,
//       },
//     });

//   // Define email options
//     const mailOptions = {
//       from: appointmentData.sender_email,
//       to: appointmentData.attendee_email,
//       subject: 'Appointment Invitation',
//       text: 'Please find the appointment details attached.',
//       attachments: [
//         {
//           filename: 'appointment.ics',
//           content: icsContent,
//         },
//       ],
//     };

//   try {
//     // Send the email
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ', info.response);

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error sending email: ', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }


// export const postAppointment = async (req, res) => {
//   try {
//     const { appointmentData } = req.body;
//     console.log(appointmentData)

//     if (!appointmentData) {
//       return res.status(400).json({ error: 'Invalid request body. Missing appointmentData.' });
//     }

//     const newAppointmentPost = new Appointment(appointmentData);
//     const savedAppointment = await newAppointmentPost.save();

//     // Function to generate iCalendar content
//     const generateICSContent = (data) => {
//       const { date, time, location, content, attendee_email } = data;

//       const formattedDate = `${date} @ ${time}`;
//       const formattedContent = content.replace(/\n/g, '\\n');

//       const icsContent = `
//         BEGIN:VCALENDAR
//         VERSION:2.0
//         PRODID:-//Your Company//Your App//EN
//         BEGIN:VEVENT
//         SUMMARY:Appointment
//         LOCATION:${location}
//         DESCRIPTION:${formattedContent}
//         DTSTART;TZID=America/New_York:${formattedDate}
//         DTEND;TZID=America/New_York:${formattedDate}
//         ATTENDEE:${attendee_email}
//         END:VEVENT
//         END:VCALENDAR  
//       `;

//       return icsContent;
//     };

//     // Load the iCalendar file
//     const icsContent = generateICSContent(appointmentData);

//     // Create a transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: appointmentData.sender_email,
//         pass: appointmentData.sender_password,
//       },
//     });

//     // Define email options
//     const mailOptions = {
//       from: appointmentData.sender_email,
//       to: appointmentData.attendee_email,
//       subject: 'Appointment Invitation',
//       text: 'Please find the appointment details attached.',
//       attachments: [
//         {
//           filename: 'appointment.ics',
//           content: icsContent,
//         },
//       ],
//     };

//     // Send the email
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ', info.response);

//     res.status(201).json(savedAppointment);
//   } catch (error) {
//     console.error('Error processing appointment:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

