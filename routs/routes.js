import express from "express";
import nodemailer from "nodemailer";

//router object
const router = express.Router();

//routes
router.post("/sendEmail", (req, res) => {
  const { name, email, sms } = req.body;
  // console.log(`${name} , ${email} , ${sms}`);
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: email,
    to: process.env.EMAIL,
    subject: name,
    text: `My name is ${name} and my message is ${sms}`,
    html: `My name is ${name} and my message is ${sms}`,
  };

  transport.sendMail(mailOption, (error, info) => {
    if (error) {
      return res.status(400).send({
        success: false,
        message: "Error",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Email send",
    });
  });
});

//export
export default router;
