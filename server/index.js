const express = require('express');
const multer = require('multer'); // For handling file uploads
const upload = multer({ dest: 'uploads/' }); // Set the destination folder for file uploads

const app = express();

// Handle file uploads and form data
app.post('/upload-and-save', upload.fields([
  { name: 'cvAttachment', maxCount: 1 }, // Name attribute must match the file input field
  { name: 'proposalAttachment', maxCount: 1 },
]), (req, res) => {
  // Process form data
  const { projectTitle, teamMembers, projectCategory, projectDescription } = req.body;

  // Insert form data into the database (use your preferred database library)

  // Move the uploaded files to a permanent location (e.g., project directory)
  const cvFile = req.files['cvAttachment'][0];
  const proposalFile = req.files['proposalAttachment'][0];
  const cvFilePath = `${__dirname}/uploads/${cvFile.filename}`;
  const proposalFilePath = `${__dirname}/uploads/${proposalFile.filename}`;
  // Move the files to the project directory
  // ...

  // Respond to the client with success or error message
  res.send('Files uploaded and data saved successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
