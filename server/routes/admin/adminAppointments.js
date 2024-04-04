import express from 'express'
import Appointment1 from '../../models/appointments.js';
import {postAppointment} from '../../controller/appointments.js'
import nodemailer from 'nodemailer'

const router = express.Router();

router.post('/add-appointment', async (req, res) => {  
   
  const appointmentData = req.body;
  const newAppointmentPost = new Appointment1(appointmentData); 
  try {
      
    if (!appointmentData) {
      return res.status(400).json({ error: 'Invalid request body. Missing appointmentData.' });
    }

    const savedAppointment = await newAppointmentPost.save();

    // Function to generate iCalendar content
    const generateICSContent = (data) => {
      const { date, time, location, content, attendee_email } = data;

      //const formattedDate = `${date} @ ${time}`;//
      const formattedDate = `${date.replace(/-/g, '')}T${time.replace(/:/g, '')}00`;

      const formattedContent = content.replace(/\n/g, '\\n');

      const icsContent = `
        BEGIN:VCALENDAR
        VERSION:2.0
        PRODID:-//Your Company//Your App//EN
        BEGIN:VEVENT
        SUMMARY:Appointment
        LOCATION:${location}
        DESCRIPTION:${formattedContent}
        DTSTART;TZID=America/New_York:${formattedDate}
        DTEND;TZID=America/New_York:${formattedDate}
        ATTENDEE:${attendee_email}
        END:VEVENT
        END:VCALENDAR  
      `;

      return icsContent;
    };

    // Load the iCalendar file
    const icsContent = generateICSContent(appointmentData);

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: appointmentData.sender_email,
        pass: appointmentData.sender_password,
      },
    });

    // Define email options
    const mailOptions = {
      from: appointmentData.sender_email,
      to: appointmentData.attendee_email,
      subject: 'Appointment Invitation',
      text: 'Please find the appointment details attached.',
      attachments: [
        {
          filename: 'appointment.ics',
          content: icsContent,
        },
      ],
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);

    res.status(201).json(savedAppointment);
  } catch (error) {
    console.error('Error processing appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }



}
);

export default router;


