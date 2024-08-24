const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email id
      pass: process.env.EMAIL_PASS, // Your password
    },
  });

  // Set up email data with a simple black-themed HTML template
  const mailOptions = {
    from: email,
    to: 'ahmadadil2705@gmail.com', // Your email id
    subject: `Message from ${name}`,
    html: `
      <div style="background-color: #1a1a1a; padding: 20px; color: #ffffff; font-family: Arial, sans-serif; border-radius: 10px;">
        <h2 style="color: #ff9900;">New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="margin-top: 10px; padding: 15px; background-color: #333333; border-radius: 5px;">
          ${message}
        </p>
        <footer style="margin-top: 20px; text-align: center; font-size: 12px;">
          <p style="color: #999999;">This message was sent from your website contact form.</p>
        </footer>
      </div>
    `,
  };

  // Send mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send({ success: false, message: 'Failed to send email' });
    }
    res.send({ success: true, message: 'Email sent successfully' });
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
