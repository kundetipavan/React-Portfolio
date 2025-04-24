const express = require("express");
   const cors = require("cors");
   const nodemailer = require("nodemailer");
   const dotenv = require("dotenv");

   dotenv.config();

   const app = express();

   app.use(cors({
    origin: 'https://pavanu.netlify.app', // Adjust to your frontend port
    methods: ['GET', 'POST'],
    credentials: true
  }));
     app.use(express.json());

   const transporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
       user: process.env.EMAIL_USERR,
       pass: process.env.EMAIL_PASSS,
     },
   });

   app.post("/contact", async (req, res) => {
     try {
       const { name, email, project, message } = req.body;

       if (!name || !email || !project || !message) {
         return res.status(400).json({ message: "All fields are required" });
       }

       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailRegex.test(email)) {
         return res.status(400).json({ message: "Invalid email format" });
       }

       console.log("New Contact Form Submission:");
       console.log("Name:", name);
       console.log("Email:", email);
       console.log("Project:", project);
       console.log("Message:", message);

       const mailOptions = {
         from: process.env.EMAIL_USERR,
         to: process.env.EMAIL_USERR,
         subject: `New Contact Form Submission: ${project}`,
         text: `
           Name: ${name}
           Email: ${email}
           Project: ${project}
           Message: ${message}
         `,
       };

       await transporter.sendMail(mailOptions);
       console.log("Email sent successfully");

       res.status(200).json({ message: "Message sent successfully" });
     } catch (error) {
       console.error("Error processing contact form:", error);
       res.status(500).json({ message: "Failed to send message. Please try again." });
     }
   });

   const PORT = process.env.PORT || 5000;
   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
