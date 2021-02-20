require("dotenv").config();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const options = {
  from: process.env.EMAIL,
  to: "catajoynick@gmail.com",
  subject: "Sending Email with node.js",
  text: "Yohoo.",
};

transporter.sendMail(options, function (err, info) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(info.response);
});
